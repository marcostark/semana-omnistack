const Developer = require('../models/Developer');

module.exports = {
    async store(req, res){

        const {user } = req.headers // Pegando parametros do header, usuário logado
        const {devId } = req.params // Pegando parametros pela rota, recebendo like
                
        // Buscar no banco de dados
        const loggedDev = await Developer.findById(user);
        const targetDev = await Developer.findById(devId);

        if(!targetDev) {
            return res.status(400).json({error: 'Developer not exists'});
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save(); // salvando no bd

        return res.json(loggedDev);
    }
};