const Sequelize = require('sequelize');
const db = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres',
});

//process.env.DATABASE_URL
//removed for deployment purposes:
//'postgres://localhost:5432/chat-app
module.exports = db;
