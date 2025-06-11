import Comment from "../models/comment.model.js";

export const getPostComments = async (req, res) => {
    const { postId } = req.params;
    const comments = await Comment.find({ pin: postId });
    const commentCount = await Comment.countDocuments({ pin: postId });
    return res.status(200).json(comments, commentCount);
}