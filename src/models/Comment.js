// src/models/Comment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Comment = sequelize.define('Comment', {
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Comment;
