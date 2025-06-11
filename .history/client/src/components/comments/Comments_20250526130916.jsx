import EmojiPicker from "emoji-picker-react";
import Image from "../image/image";
import "./comments.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequests";
import {format} from 'timeago.js'

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
        <span className="commentCount">{data.length} comments</span>
        {data?.map((comment) => (
           <div className="comment" key={comment._id}>
           <Image path="/general/noAvatar.png" alt="" />
           <div className="commentContent">
             <span className="commentUsername">{comment.user.displayName}</span>
             <p className="commentText">
               {comment.description}
             </p>
             <span className="commentTime">{format(comment.updatedAt)}</span>
           </div>
         </div>
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
