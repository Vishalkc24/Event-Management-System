// src/services/commentService.js
const Comment = require('../models/Comment');

const leaveComment = async (commentData) => {
  try {
    const comment = await Comment.create(commentData);
    return comment;
  } catch (error) {
    throw new Error('Failed to leave comment');
  }
};

// Implement other comment-related services as needed

module.exports = {
  leaveComment,
};
