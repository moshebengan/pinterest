import EmojiPicker from "emoji-picker-react";

import "./comments.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequests";
import Comment from "./Comment";


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
        <span className="commentCount">{data.length === 0 ? `No Comments` : `${data.length} comments`}</span>
        {data?.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))}
       
 
   
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
