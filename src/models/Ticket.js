// src/models/Ticket.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Ticket = sequelize.define('Ticket', {
  ticketType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Ticket;
