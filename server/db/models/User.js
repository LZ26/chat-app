const Sequelize = require('sequelize');
const { STRING, BOOLEAN, INTEGER } = Sequelize;
const db = require('../db');

const User = db.define('user', {
  userName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true,
    },
  },

  password: {
    type: STRING,
    allowNull: false,
    defaultValue: 'none',
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = User;
