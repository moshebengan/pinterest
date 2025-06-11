import EmojiPicker from "emoji-picker-react";
import Image from "../image/image";
import "./comments.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequests";

const Comments = ({postId}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => apiRequest.get(`/comments/${postId}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong... " + error.message;
  if (!data) return "User not found";

  console.log(data)
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 comments</span>
        {/* COMMENT */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              quas error voluptate iusto ab fugiat quae, eum asperiores
              distinctio voluptates tempora quasi.
            </p>
            <span className="commentTime">1h ago</span>
          </div>
        </div>
        {/* COMMENT */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              quas error voluptate iusto ab fugiat quae, eum asperiores
              distinctio voluptates tempora quasi.
            </p>
            <span className="commentTime">1h ago</span>
          </div>
        </div>
        {/* COMMENT */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              quas error voluptate iusto ab fugiat quae, eum asperiores
              distinctio voluptates tempora quasi.
            </p>
            <span className="commentTime">1h ago</span>
          </div>
        </div>
      </div>
      <form className="commentForm">
        <input type="text" placeholder="Add a comment" />
        <div className="emoji">
          <div onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😜</div>
          {showEmojiPicker && (
            <div className="emojiPicker">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;
