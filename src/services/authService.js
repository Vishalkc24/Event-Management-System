// src/services/authService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config.json');
const User = require('../models/User');

const register = async (userData) => {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await User.create({
      username: userData.username,
      email: userData.email,
      password: hashedPassword,
    });
    return user;
  } catch (error) {
    throw new Error('Failed to register user');
  }
};

const login = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password');
    }
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    return token;
  } catch (error) {
    throw new Error('Failed to login');
  }
};

module.exports = {
  register,
  login,
};
