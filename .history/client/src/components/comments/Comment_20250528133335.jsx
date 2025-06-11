import { useState } from "react";
import Image from "../image/image";
import { format } from "timeago.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequests";

const deleteComment = async (id) => {
  const res = await apiRequest.delete(`/comments/${id}`, {
    withCredentials: true,
  });
  return res.data;
};

const Comment = ({ comment }) => {
  const [hovered, setHovered] = useState(false);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      if (queryClient) {
        queryClient.invalidateQueries({ queryKey: ["comments", comment._id] });
      }
    },
  });

  const handleDelete = () => {
    mutation.mutate();
  };

  return (
    <div
      className="comment"
      key={comment._id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image path={comment.user.img || "/general/noAvatar.png"} alt="" />
      <div className="commentContent">
        <span className="commentUsername">{comment.user.displayName}</span>
        <p className="commentText">{comment.description}</p>
        <span className="commentTime">{format(comment.updatedAt)}</span>
      </div>
      {hovered && (
        <button
          onClick={handleDelete}
          className="deleteComment"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            background: "transparent",
            border: "none",
            color: "red",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default Comment;
