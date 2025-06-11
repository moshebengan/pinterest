import EmojiPicker from "emoji-picker-react";
import { useState } from "react";


const CommentForm = () => {
  const [desc, setDesc] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emoji) => {
    setDesc((prev) => prev + emoji.emoji);
    setShowEmojiPicker(false);
  }
  return (
    <form className="commentForm">
    <input type="text" placeholder="Add a comment" onChange={(e) => setDesc(e.target.value)} value={desc} />
    <div className="emoji">
      <div onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😜</div>
      {showEmojiPicker && (
        <div className="emojiPicker">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  </form>
  )
}

export default CommentForm
