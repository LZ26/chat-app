const Sequalize = require('sequelize');
const db = require('../db');
const { UUID, UUIDV4 } = Sequalize;

const Session = db.define('session', {
  uuid: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
});

module.exports = Session;
