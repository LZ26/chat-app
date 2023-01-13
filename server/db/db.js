const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  }
);

// const db = new Sequelize(
//   process.env.DATABASE_URL || 'postgres://localhost:5432/chat-app',
//   {
//     dialect: 'postgres',
//   }
// );

module.exports = db;
