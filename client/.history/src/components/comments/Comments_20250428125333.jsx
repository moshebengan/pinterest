import Image from "../image/image";
import "./comments.css";

const Comments = () => {
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
            <div>😜</div>
        </div>
      </form>
    </div>
  );
};

export default Comments;
