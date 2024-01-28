// index.js
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/errorUtils'); // Update path
const logger = require('./utils/logger');

// Import routes
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const commentRoutes = require('./routes/commentRoutes');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(logger);

// Routes
app.use('/auth', authRoutes);
app.use('/events', eventRoutes);
app.use('/tickets', ticketRoutes);
app.use('/comments', commentRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
