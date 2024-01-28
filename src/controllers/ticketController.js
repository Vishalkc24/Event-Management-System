// src/controllers/ticketController.js
const Ticket = require('../models/Ticket');

const purchaseTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).json({ message: 'Ticket purchased successfully', ticket });
  } catch (error) {
    res.status(500).json({ message: 'Failed to purchase ticket', error: error.message });
  }
};

const viewPurchasedTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll({ where: { userId: req.params.userId } });
    res.status(200).json({ tickets });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve tickets', error: error.message });
  }
};

module.exports = {
  purchaseTicket,
  viewPurchasedTickets,
};
