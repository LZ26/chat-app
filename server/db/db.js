const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

//removed for deployment purposes:
//'postgres://localhost:5432/chat-app
module.exports = db;
