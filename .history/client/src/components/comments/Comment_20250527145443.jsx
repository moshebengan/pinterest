import { useState } from "react"
import Image from "../image/image"
import {format} from 'timeago.js'
import Image from "../image/image"

const Comment = ({comment}) => {

  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div className="comment" key={comment._id} onMouseOver={setMouseOver(true)} onMouseLeave={setMouseOver(false)}>
    <Image path={comment.user.img || "/general/noAvatar.png"} alt="" />
    <div className="commentContent">
      <span className="commentUsername">{comment.user.displayName}</span>
      {mouseOver && <Image path="/general/delete.svg" alt="" />}
      <p className="commentText">
        {comment.description}
      </p>
      <span className="commentTime">{format(comment.updatedAt)}</span>
    </div>
  </div>
  )
}

export default Comment
