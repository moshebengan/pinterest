import { Link } from "react-router";
import "./galleryItem.css";
import Image from '../image/image.jsx'



const GalleryItem = ({ item }) => {

  const optimizedHeight = (372 * item.height) / item.width

  console.log(item.media, Math.ceil(item.height / 100))
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* <img src={item.media} alt="" /> */}
    <Image path={item.media} alt="" w={372} h={optimizedHeight} />
      <Link to={`/pin/${item._id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <Image path="/general/share.svg" alt="" />
        </button>
        <button>
          <Image path="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
