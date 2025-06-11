

import { Link } from 'react-router'
import Image from '../../components/image/image.jsx'
import PostInteractions from '../../components/postInteractions/PostInteractions.jsx'
import Comments from '../../components/comments/Comments.jsx'

const PostPage = () => {
  return (
    <div className='postPage'>
      <div className="postContainer">
        <div className="postImg">
          <Image path="/pins/pin1.jpeg" alt="" w={736} />
        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link to="/john">
          <Image path="/general/noAvatar.png" />
          <span>John Doe</span>
          </Link>
          <Comments/>
        </div>
      </div>
    </div>
  )
}

export default PostPage
