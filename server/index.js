const shortid = require('shortid');
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

const db = {};

io.on('connection', (socket) => {
  console.log('a user connected!');
  socket.on('createUser', (data) => {
    console.log('Create User Data: ', data);
    // Generate unique room number id
    let roomId = shortid.generate();
    // add socket to room
    socket.join(roomId);
    // Save room id and way to get to that room
    db[roomId] ? db[roomId].push(socket.id) : (db[roomId] = [socket.id]);
    // emit something
    console.log('Socket Rooms 2: ', socket.rooms);
    io.to(roomId).emit('playerJoinedRoom', { roomId, sockets: db[roomId] });
  });
});

httpServer.listen(3001, () => {
  console.log('Listening on http://localhost:3001');
});
