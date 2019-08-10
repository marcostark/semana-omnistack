const Developer = require('../models/Developer');

module.exports = {
    async store(req, res){
        console.log(req.io, req.connectedUsers);

        const {user } = req.headers // Pegando parametros do header, usuário logado
        const {devId } = req.params // Pegando parametros pela rota, recebendo like
                
        // Buscar no banco de dados
        const loggedDev = await Developer.findById(user);
        const targetDev = await Developer.findById(devId);

        if(!targetDev) {
            return res.status(400).json({error: 'Developer not exists'});
        }

        // Verifica se o alvo já deu like no usuário logado (match)
        if(targetDev.likes.includes(loggedDev._id)){
            //console.log('DEU MATCH!');
            // Buscar conexao de socket ativa
            const loggedSocket = req.connectedUsers[user];
            const targetSocket = req.connectedUsers[devId];

            if(loggedSocket) {
                req.io.to(loggedSocket).emit('match', targetDev);
            }

            if(targetSocket) {
                req.io.to(targetSocket).emit('match', loggedDev);
            }
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save(); // salvando no bd

        return res.json(loggedDev);
    }
};