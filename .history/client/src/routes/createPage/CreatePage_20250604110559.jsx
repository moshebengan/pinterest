import "./createPage.css";
import IKImage from "../../components/image/image";
import useAuthStore from "../../utils/authStore";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Editor from "../../components/editor/Editor";

const CreatePage = () => {
  const { currentUser } = useAuthStore();
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [previewImg, setPreviewImg] = useState({
    url: "",
    width: 0,
    height: 0,
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!currentUser) navigate("/auth");
  }, [currentUser, navigate]);

  // const previewImgURL = file ? URL.createObjectURL(file) : null;

  useEffect(() => {
    if (!file) return;
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      setPreviewImg({
        url: URL.createObjectURL(file),
        width: img.width,
        height: img.height,
      });
    };
  }, [file]);
  return (
    <div className="createPage">
      <div className="createTop">
        <h1>{isEditing ? "Design your Pin" : "Create Pin"} </h1>
        <button>{isEditing ? "Done" : "Publish"}</button>
      </div>
      {isEditing ? (
        <Editor previewImg={previewImg} />
      ) : (
        <div className="createBottom">
          {previewImg.url ? (
            <div className="preview">
              <img
                src={previewImg.url}
                alt=""
                height={previewImg.height}
                width={previewImg.width}
              />
              <div className="editIcon" onClick={() => setIsEditing(true)}>
                <IKImage path="/general/edit.svg" alt="" />
              </div>
            </div>
          ) : (
            <>
              <label htmlFor="file" className="upload">
                <div className="uploadTitle">
                  <IKImage path="/general/upload.svg" alt="" />
                  <span>Choose a file</span>
                </div>
                <div className="uploadInfo">
                  We recommend using high quality .jpeg files less than 20 files
                  less than 200 MB.
                </div>
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                hidden
              />
            </>
          )}

          <form className="createForm">
            <div className="createFormItem">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Add a title"
                name="title"
                id="title"
              />
            </div>
            <div className="createFormItem">
              <label htmlFor="description">Description</label>
              <textarea
                rows={6}
                type="text"
                placeholder="Add a detailed description"
                name="description"
                id="description"
              />
            </div>
            <div className="createFormItem">
              <label htmlFor="link">Link</label>
              <input
                type="text"
                placeholder="Add a link"
                name="link"
                id="link"
              />
            </div>
            <div className="createFormItem">
              <label htmlFor="board">Board</label>
              <select name="board" id="board">
                <option>Choose a board</option>
                <option value="1">Board 1</option>
                <option value="2">Board 2</option>
                <option value="3">Board 3</option>
              </select>
            </div>
            <div className="createFormItem">
              <label htmlFor="tags">Tagged topics</label>
              <input type="text" placeholder="Add tags" name="tags" id="tags" />
              <small>Don&apos;t worry, people won&apos;t see your tags</small>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreatePage;
