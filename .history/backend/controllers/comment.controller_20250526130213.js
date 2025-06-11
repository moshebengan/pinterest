import Comment from "../models/comment.model.js";

export const getPostComments = async (req, res) => {
    const { postId } = req.params;
    const comments = await Comment.find({ pin: postId }).sort({createdAt: -1});
    
    return res.status(200).json(comments);
}