import "./userButton.css";
const UserButton = () => {
  // Temp
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="" />
      <img src="/general/arrow.svg" alt="" />
    </div>
  ) : (
    <a href="/">Login / Sign Up</a>
  );
};

export default UserButton;
