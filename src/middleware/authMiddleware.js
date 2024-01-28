// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config.json');

// Middleware to verify JWT token for protected routes
const authMiddleware = (req, res, next) => {
  // Get token from request headers
  const token = req.headers.authorization;

  // If no token provided, return unauthorized error
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  // Verify token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
    // If token is valid, set decoded user information on request object
    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;
