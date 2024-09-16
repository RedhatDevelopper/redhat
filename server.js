const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Un utilisateur est connecté');

    socket.on('message', (msg) => {
        io.emit('message', msg);
    });

    socket.on('disconnect', () => {
        console.log('Un utilisateur est déconnecté');
    });
});

server.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});
