import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import apiRequest from "../../utils/apiRequests";
import { useMutation, useQueryClient } from "@tanstack/react-query";


const addComment = async (comment) => {
  const res = await apiRequest.post("/comments", comment);
  return res.data;
}

const CommentForm = ({id}) => {
  const [desc, setDesc] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  
 

  const handleEmojiClick = (emoji) => {
    setDesc((prev) => prev + emoji.emoji);
    setShowEmojiPicker(false);
  }

  const queryClient = useQueryClient();

  const mutation = useMutation({
      mutationFn: addComment, 
      onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["comments", id]});
      setDesc("");
      setShowEmojiPicker(false);
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({description: desc, pin: id});
  }
  return (
    <form className="commentForm" onSubmit={handleSubmit}>
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
