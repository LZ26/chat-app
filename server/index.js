const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

app.use('/routes', require('./routes'));

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`This app is running on a port: ${PORT}`);
});
