import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";


export const getPostComments = async (req, res) => {
  const { postId } = req.params;
  const comments = await Comment.find({ pin: postId })
    .populate("user", "username img displayName")
    .sort({ createdAt: -1 });

  return res.status(200).json(comments);
};

export const addComment = async (req, res) => {
  const { description, pin } = req.body;
  const userId = req.userId;

  const comment = await Comment.create({
    description,
    pin,
    user: userId,
  });

  res.status(201).json(comment);
};

export const deleteComment = async (req, res) => {
    const id = req.params.commentId
    try {
        const comment = await Comment.findById(id);
        if (!comment) return res.status(404).json({ message: "Comment not found" });

        if (comment.user.toString() !== req.userId) {
            return res.status(403).json({ message: "You can delete only your comment" });
        }

        await Comment.findByIdAndDelete(id);
        return res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
