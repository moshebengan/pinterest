import Image from "../image/image"
import {format} from 'timeago.js'

const Comment = ({comment}) => {
  return (
    <div className="comment" key={comment._id}>
    <Image path={comment.user.img || "/general/noAvatar.png"} alt="" />
    <div className="commentContent">
      <span className="commentUsername">{comment.user.displayName}</span>
      <p className="commentText">
        {comment.description}
      </p>
      <span className="commentTime">{format(comment.updatedAt)}</span>
    </div>
  </div>
  )
}

export default Comment
