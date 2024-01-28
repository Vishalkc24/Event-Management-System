// src/routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Leave a comment on an event
router.post('/', commentController.leaveComment);

module.exports = router;
