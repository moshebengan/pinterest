import "./boards.css";
import Image from "../image/image";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequests";

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
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>Minimalist Bedrooms</h1>
          <span>12 pins · 1w</span>
        </div>
      </div>
      {/* Collection */}
      <div className="collection">
      <Image path="/pins/pin1.jpeg" alt="" />
      <div className="collectionInfo">
        <h1>Minimalist Bedrooms</h1>
        <span>12 pins · 1w</span>
      </div>
      </div>
    </div>
  );
};

export default Boards;
