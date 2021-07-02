// Import express and initialize express app
const express = require('express');
const app = express();
// Import http from node standard library and create a server from express app
const http = require('http');
const httpServer = http.createServer(app);
// Import Server from socket.io and create a new server from our httpServer
const { Server } = require('socket.io');
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
});

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

io.on('connection', (socket) => {
  console.log('a user connected!')
})

httpServer.listen(3001, () => {
  console.log('Listening on http://localhost:3001')
})
