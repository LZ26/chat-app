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

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

app.use('/routes', require('./routes'));

http.listen(PORT, () => {
  console.log(`This app is running on a port: ${PORT}`);
});
