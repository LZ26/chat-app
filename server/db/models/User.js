const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true,
    },
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'none',
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = User;
