import './userProfilePage.css'
import Image from "../../components/image/image";
import { useState } from 'react';
import Gallery from '../../components/gallery/Gallery';
import Boards from '../../components/boards/Boards';
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../utils/apiRequests';
import { useParams } from 'react-router';
import FollowButton from './FollowButton';

const UserProfilePage = () => {
  

  const [type, setType] = useState("saved");

  const {username} = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["profile", username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong... " + error.message;
  if (!data) return "User not found";

  
  return (
    <div className="profilePage">
      <Image w={100} h={100} className="profileImage" src={data.img || "general/noAvatar.png"} alt="" />
      <h1 className="profileName">{data.displayName}</h1>
      <span className="profileUsername">@{data.username}</span>
      <div className="followCounts">{data.followerCount} followers · {data.followingCount} following </div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          <FollowButton isFollowing={data.isFollowing} username={data.username}/>
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span className={type === 'created' ? "active" :  ""} onClick={() => setType("created")}>Created</span>
        <span className={type === 'saved' ? "active" :  ""} onClick={() => setType("saved")}>Saved</span>
      </div>
      {type === 'created' ? <Gallery userId={data._id} /> : <Boards userId={data._id}  />}
    </div>
  );
};

export default UserProfilePage;
