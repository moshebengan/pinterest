import "./boards.css";
import Image from "../image/image";

const Boards = () => {
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
