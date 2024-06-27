const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING, 
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.INTEGER,
  },
});

const Claim = sequelize.define('Claim', {
  nameUser: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.STRING,
  },
  answer: {
    type: DataTypes.STRING,
  },
  pick: {
    type: DataTypes.INTEGER,
  },
  trim: {
    type: DataTypes.INTEGER,
  },
  executor: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
});


module.exports = {
    User,
    Claim
};