const express = require('express');
const app = express();
// const { db } = require('./db');
const morgan = require('morgan');
const path = require('path');
// const authMiddleware = require('./routes/middleware/auth');
const cookieParser = require('cookie-parser');

//logging middleware
app.use(morgan('dev'));

//body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//static files serving middleware
app.use(express.static(path.join(__dirname, 'public')));

//integrating cors to our app
const http = require('http').Server(app);
const cors = require('cors');
app.use(cors());

//creating real-time connection
const PORT = process.env.PORT; //use port from env or 3000 by default
//

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

//routes access via AJAX are prepended with /api, so as to avoid the GET /* wildcard
// app.use(authMiddleware);
// app.use('/api', require('./routes'));

//sends index.html(single-page SPA)
app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// //error middleware
// app.use((err, req, res, next) => {
//   if (process.env.NODE_ENV !== 'test') console.error(err.stack);
//   res.status(err.status || 500).send(err.message || 'Internal server error');
// });

const init = async () => {
  try {
    // await db.sync().then(() => {
    http.listen(PORT, () => {
      console.log(`This app is running on a port: ${PORT}`);
    });
    // });
  } catch (err) {
    console.error(err);
  }
};

init();
