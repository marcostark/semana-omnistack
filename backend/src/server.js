const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {
    
}

io.on('connection', socket => {  
    const { user }  = socket.handshake.query;

    console.log(user, socket.id);

    connectedUsers[user] = socket.id
});

mongoose.connect('mongodb+srv://<db>:<password>@<server>?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// Interceptacao da requisicao
app.use((request, response, next) => {
    request.io = io;
    request.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json())
app.use(routes);

server.listen(3333);