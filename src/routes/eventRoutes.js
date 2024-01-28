// src/routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Create a new event
router.post('/', eventController.createEvent);

// Get details of a single event
router.get('/:eventId', eventController.getEventDetails);

// Update an event
router.put('/:eventId', eventController.updateEvent);

// Delete an event
router.delete('/:eventId', eventController.deleteEvent);

module.exports = router;
