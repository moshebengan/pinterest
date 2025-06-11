import "./createPage.css";
import Image from "../../components/image/image";

const CreatePage = () => {
  return (
    <div className="createPage">
      <div className="createTop">
        <h1>Create Pin</h1>
        <button>Publish</button>
      </div>
      <div className="createBottom">
        <div className="upload">
          <div className="uploadTitle">
            <Image path="/general/upload.svg" alt="" />
          </div>
          <div className="uploadInfo">
            We recommend using high quality .jpeg files less than 20 files less
            than 200 MB.
          </div>
        </div>
        <form className="createForm"></form>
      </div>
    </div>
  );
};

export default CreatePage;
