// src/controllers/commentController.js
const Comment = require('../models/Comment');

const leaveComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json({ message: 'Comment added successfully', comment });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add comment', error: error.message });
  }
};

module.exports = {
  leaveComment,
};
