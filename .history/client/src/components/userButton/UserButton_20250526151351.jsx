import { useState } from "react";
import "./userButton.css";
import Image from "../image/image";
import apiRequest from "../../utils/apiRequests";
import { Link, useNavigate } from "react-router";
import useAuthStore from "../../utils/authStore";
const UserButton = () => {
  const [open, setOpen] = useState(false);
  // Temp

  const {currentUser, removeCurrentUser} = useAuthStore();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/users/auth/logout", {});
      removeCurrentUser();
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
    <Link to="/auth" className="loginLink">
      Login / Sign Up
    </Link>
  );
};

export default UserButton;
