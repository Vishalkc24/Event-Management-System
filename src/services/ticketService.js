// src/services/ticketService.js
const Ticket = require('../models/Ticket');

const purchaseTicket = async (ticketData) => {
  try {
    const ticket = await Ticket.create(ticketData);
    return ticket;
  } catch (error) {
    throw new Error('Failed to purchase ticket');
  }
};

const getTicketsByUserId = async (userId) => {
  try {
    const tickets = await Ticket.findAll({ where: { userId } });
    return tickets;
  } catch (error) {
    throw new Error('Failed to retrieve tickets');
  }
};

// Implement other ticket-related services as needed

module.exports = {
  purchaseTicket,
  getTicketsByUserId,
};
