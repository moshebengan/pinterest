import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/">
          <img src="/general/logo.png" alt="" />
        </a>
        <a href="/">
          <img src="/general/home.svg" alt="" />
        </a>
        <a href="/">
          <img src="/general/create.svg" alt="" />
        </a>
        <a href="/">
          <img src="/general/updates.svg" alt="" />
        </a>
        <a href="/">
          <img src="/general/messages.svg" alt="" />
        </a>
       
      </div>
    </div>
  );
};

export default LeftBar;
