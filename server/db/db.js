const Sequelize = require('sequelize');

let sequelize;
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  sequelize = new Sequelize(
    process.env.POSTGRES_DB || 'chat-app',
    process.env.POSTGRES_USER || 'Laziz',
    '',
    {
      host: process.env.PSQL_HOST || 'localhost',
      dialect: 'postgres',
      pool: {
        max: 100,
        min: 0,
        idle: 200000,
        acquire: 1000000,
      },
    }
  );
}

// const db = new Sequelize('database', 'username', 'password', {
//   dialect: 'postgres',
// });

//process.env.DATABASE_URL
//removed for deployment purposes:
//'postgres://localhost:5432/chat-app
module.exports = db;
