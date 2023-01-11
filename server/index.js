const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const http = require('http').Server(app);
const cors = require('cors');
const PORT = process.env.PORT || 3000; //use port from env or 3000 by default

app.use(cors());

//creating real-time connection
const socketIO = require('socket.io')(http, {
  cors: {
    origin: `http://localhost:${PORT}`,
  },
});

let users = [];

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  //This listener listens and logs the message to the console.
  socket.on('message', (data) => {
    socketIO.emit('messageResponse', data);
  });

  //this listens to keyboard typing and shows the status to client
  socket.on('typing', (data) => socket.broadcast.emit('typingResponse', data));
  //listens when a new user joins the server
  socket.on('newUser', (data) => {
    //Adds the new user to the list
    users.push(data);

    //sends the list of users to the client
    socketIO.emit('newUserResponse', users);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    //Updates list of users when a user disconnects from the server
    users = users.filter((user) => user.socketID !== socket.id);

    //sends the list of users to the client
    socketIO.emit('newUserResponse', users);
    socket.disconnect();
  });
});

app.use('/routes', require('./routes'));

http.listen(PORT, () => {
  console.log(`This app is running on a port: ${PORT}`);
});
