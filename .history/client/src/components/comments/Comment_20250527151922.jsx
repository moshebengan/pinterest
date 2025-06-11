import { useState } from "react";
import Image from "../image/image";
import { format } from "timeago.js";

const Comment = ({ comment }) => {
  const [hovered, setHovered] = useState(false);
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
