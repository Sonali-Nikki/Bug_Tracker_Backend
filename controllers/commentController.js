import Comment from "../models/Comment.js";

// Add comment
export const addComment = async (req, res) => {
  const comment = await Comment.create({
    ticketId: req.params.ticketId,
    userId: req.user._id,
    text: req.body.text,
  });

  res.status(201).json(comment);
};

// Get comments by ticket
export const getComments = async (req, res) => {
  const comments = await Comment.find({
    ticketId: req.params.ticketId,
  }).populate("userId", "name email");

  res.json(comments);
};
