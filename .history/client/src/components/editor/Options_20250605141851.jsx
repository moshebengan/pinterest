import { useState } from "react";
import useEditorStore from "../../utils/editorStore";
import { NextColorPicker } from "react-colorful";

const Options = () => {
  const { selectedLayer, textOptions, setTextOptions } = useEditorStore();
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  return (
    <div className="options">
      {selectedLayer === "text" ? (
        <div className="">
          <div className="editingOption">
            <span>Font Size</span>
            <input
              type="number"
              value={textOptions.fontSize}
              onChange={(e) =>
                setTextOptions({ ...textOptions, fontSize: e.target.value })
              }
            />
          </div>
          <div className="editingOption">
            <span>Color</span>
            <div className="textColor">
              <div
                className="colorPreview"
                style={{ backgroundColor: textOptions.color }}
                onClick={() => setIsColorPickerOpen((prev) => !prev)}
              />
              {isColorPickerOpen && (
                <div className="colorPicker">
                  <NextColorPicker
                    color={textOptions.color}
                    onChange={(color) =>
                      setTextOptions({ ...textOptions, color: color })
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="editingOption">
            <span>Orientation</span>
            <div className="orientations"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Options;
