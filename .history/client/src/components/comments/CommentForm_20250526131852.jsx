import EmojiPicker from "emoji-picker-react";
import { useState } from "react";


const CommentForm = () => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  return (
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
  )
}

export default CommentForm
