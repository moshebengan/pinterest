import './userProfilePage.css'
import Image from "../../components/image/image";
import { useState } from 'react';

const UserProfilePage = () => {

  const [type, setType] = useState("saved");
  return (
    <div className="profilePage">
      <Image w={100} h={100} className="profileImage" path="/general/noAvatar.png" alt="" />
      <h1 className="profileName">John Doe</h1>
      <span className="profileUsername">@johnDoe</span>
      <div className="followCounts">10 followers · 10 following </div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span className={type === 'created' ? "active" :  ""} onClick={() => setType("created")}>Created</span>
        <span className={type === 'saved' ? "active" :  ""} onClick={() => setType("saved")}>Saved</span>
      </div>
    </div>
  );
};

export default UserProfilePage;
