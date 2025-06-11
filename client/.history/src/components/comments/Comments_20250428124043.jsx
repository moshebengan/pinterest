import Image from '../image/image'
import './comments.css'

const Comments = () => {
  return (
    <div className='comments'>
      <div className="commentList">
        <span className='commentCount'>5 comments</span>
        {/* COMMENT */}
        <div className="comment">
            <Image path="/general/noAvatar.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Comments
