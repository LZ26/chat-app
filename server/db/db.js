const config = require('config');
const Sequelize = require('sequelize');

const db = new Sequelize(
  config.get('postgres.database'),
  config.get('postgres.username'),
  config.get('postgres.password'),
  {
    host: config.get('postgres.host'),
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

// const db = new Sequelize('database', 'username', 'password', {
//   dialect: 'postgres',
// });

//process.env.DATABASE_URL
//removed for deployment purposes:
//'postgres://localhost:5432/chat-app
module.exports = db;
