// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for user registration
router.post('/register', userController.register);

// Route for user login
router.post('/login', userController.login);

// Route to get user details
router.get('/:userId', userController.getUserById);

// Route to update user details
router.put('/:userId', userController.updateUser);

// Route to delete user
router.delete('/:userId', userController.deleteUser);

module.exports = router;
