import "./boards.css";
import Image from "../image/image";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequests";
import {format} from 'timeago.js'

const Boards = ({userId}) => {
  const {username} = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["boards", userId],
    queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong... " + error.message;
  if (!data) return "User not found";

  console.log(data)

  return (
    <div className="collections">
      {/* Collection */}
      {data?.map((board) => (
        <Link to={`/search?boardId=${board._id}`} className="collection" key={board._id}>
        <Image src={board.firstPin.media} alt="" />
        <div className="collectionInfo">
          <h1>{board.title}</h1>
          <span>{board.pinCount} pins · {format(board.createdAt)}</span>
        </div>
      </div>
      ))}
      
     
  
    </div>
  );
};

export default Boards;
