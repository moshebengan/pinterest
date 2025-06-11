import "./userButton.css";
const UserButton = () => {
  // Temp
  const currentUser = false;

  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="" />
      <img src="/general/arrow.svg" alt=""  className="arrow"/>
    </div>
  ) : (
    <a href="/">Login / Sign Up</a>
  );
};

export default UserButton;
