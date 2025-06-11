import { useState } from "react";
import "./userButton.css";
import Image from "../image/image";
import apiRequest from "../../utils/apiRequests";
import { useNavigate } from "react-router";
const UserButton = () => {
  const [open, setOpen] = useState(false);
  // Temp
  const currentUser = true;

  const handleLogout = async () => {
    try {
      await apiRequest.post("/users/auth/logout", {});
      navigate("/auth")
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return currentUser ? (
    <div className="userButton">
      <Image path="/general/noAvatar.png" alt="" />
      <div onClick={() => setOpen((prev) => !prev)}>
        <Image
          path="/general/arrow.svg"
          alt=""
          className="arrow"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Settings</div>
          <div className="userOption" onClick={handleLogout}>
            Logout
          </div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / Sign Up
    </a>
  );
};

export default UserButton;
