import "./comments.css";

import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequests";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({ postId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () =>
      apiRequest.get(`/comments/${postId}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong... " + error.message;
  if (!data) return "User not found";

 
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">
          {data.length === 0 ? `No Comments` : `${data.length} comments`}
        </span>
        {data?.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))}
      </div>
      <CommentForm id={postId} />
    </div>
  );
};

export default Comments;
