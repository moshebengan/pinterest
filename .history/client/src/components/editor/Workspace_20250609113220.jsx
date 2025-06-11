import { useEffect, useRef } from "react";
import useEditorStore from "../../utils/editorStore";
import Image from "../image/image";
import e from "express";

const Workspace = ({ previewImg }) => {
  const {
    setSelectedLayer,
    textOptions,
    setTextOptions,
    canvasOptions,
    setCanvasOptions,
  } = useEditorStore();

  useEffect(() => {
    console.log(canvasOptions.height);
    if (canvasOptions.height === 0) {
      const canvasHeight = (375 * previewImg.height) / previewImg.width;
      console.log("canvasheight from workspace", canvasHeight);

      setCanvasOptions({
        ...canvasOptions,
        height: canvasHeight,
        orientation: canvasHeight > 375 ? "portrait" : "landscape",
      });
    }
  }, [previewImg, canvasOptions, setCanvasOptions]);

  const itemRef = useRef(null);
  const containerRef = useRef(null);
  const offSet = useRef({ x: 0, y: 0 });

  const handleMouseMove = () => {
    console.log("Mouse Move");
  };

  const handleMouseUp = () => {
    console.log("Mouse Up");
  };

  const handleMouseLeave = () => {
    console.log("Mouse Leave");
  };

  const handleMouseDown = () => {
    setSelectedLayer("text");
    offSet.current({
      x: e.clientX - textOptions.left,
      y: e.clientY - textOptions.top,
    });
  };

  return (
    <div className="workspace">
      <div
        className="canvas"
        style={{
          height: canvasOptions.height,
          backgroundColor: canvasOptions.backgroundColor,
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        <img src={previewImg.url} alt="" />
        {textOptions.text && (
          <div
            className="text"
            style={{
              left: textOptions.left,
              top: textOptions.top,
              fontSize: `${textOptions.fontSize}px`,
            }}
            ref={itemRef}
            onMouseDown={handleMouseDown}
          >
            <input
              type="text"
              value={textOptions.text}
              onChange={(e) =>
                setTextOptions({ ...textOptions, text: e.target.value })
              }
              style={{ color: textOptions.color }}
            />
            <div
              className="deleteTextButton"
              onClick={() => setTextOptions({ ...textOptions, text: "" })}
            >
              <Image path="/general/delete.svg" alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workspace;
