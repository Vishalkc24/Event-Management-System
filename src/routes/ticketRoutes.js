// src/routes/ticketRoutes.js
const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// Purchase a ticket
router.post('/', ticketController.purchaseTicket);

// View purchased tickets for a user
router.get('/user/:userId', ticketController.viewPurchasedTickets);

module.exports = router;
