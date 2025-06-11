import { useState } from "react";
import "./userButton.css";
const UserButton = () => {
    const [open, setOpen] = useState(false)
  // Temp
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="" />
      <img src="/general/arrow.svg" alt=""  className="arrow" onClick={() => setOpen(!open)}/>
      {open &&<div className="userOptions">
        <div className="userOption">Profile</div>
        <div className="userOption">Settings</div>
        <div className="userOption">Logout</div>
      </div>}
    </div>
  ) : (
    <a href="/" className="loginLink">Login / Sign Up</a>
  );
};

export default UserButton;
