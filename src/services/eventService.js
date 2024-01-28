// src/services/eventService.js
const Event = require('../models/Event');

const createEvent = async (eventData) => {
  try {
    const event = await Event.create(eventData);
    return event;
  } catch (error) {
    throw new Error('Failed to create event');
  }
};

const getEventById = async (eventId) => {
  try {
    const event = await Event.findByPk(eventId);
    if (!event) {
      throw new Error('Event not found');
    }
    return event;
  } catch (error) {
    throw new Error('Failed to retrieve event');
  }
};

// Implement other event-related services as needed

module.exports = {
  createEvent,
  getEventById,
};
