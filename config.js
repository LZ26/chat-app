module.exports = {
  production: {
    database: process.env.DB_PROD_DATABASE,
    username: process.env.DB_PROD_USERNAME,
    password: process.env.DB_PROD_PASSWORD,
    options: {
      host: process.env.DB_PROD_HOST,
      port: process.env.DB_PROD_PORT,
      dialect: 'postgres',
      define: {
        paranoid: true,
        timestamp: true,
        freezeTableName: true,
        underscored: false,
      },
    },
  },
  development: {
    database: 'database_name',
    username: 'user_name',
    password: 'pass',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    define: {
      paranoid: true,
      timestamp: true,
      freezeTableName: true,
      underscored: false,
    },
  },
};
