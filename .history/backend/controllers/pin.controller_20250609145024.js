import Pin from "../models/pin.model.js";
import User from "../models/user.model.js";
import sharp from "sharp";
import Imagekit from "imagekit";
export const getPins = async (req, res) => {
  const pageNumber = Number(req.query.cursor) || 0;
  const search = req.query.search;
  const userId = req.query.userId;
  const boardId = req.query.boardId;
  const LIMIT = 21;

  const pins = await Pin.find(
    search
      ? {
          $or: [
            { title: { $regex: search, $options: "i" } },
            { tags: { $in: search } },
          ],
        }
      : userId
      ? { user: userId }
      : boardId
      ? { board: boardId }
      : {}
  )
    .limit(LIMIT)
    .skip(pageNumber * LIMIT);

  const hasNextPage = pins.length === LIMIT;

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  return res
    .status(200)
    .json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });
};

export const getPin = async (req, res) => {
  const { id } = req.params;
  const pin = await Pin.findById(id).populate(
    "user",
    "username img displayName"
  );
  return res.status(200).json(pin);
};

export const createPin = async (req, res) => {
  const { title, description, link, board, tags, textOptions, canvasOptions } =
    req.body;

  const media = req.files.media;

  if (!title || !description || !media) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const parsedTextOptions = JSON.parse(textOptions || "{}");
  const parsedCanvasOptions = JSON.parse(canvasOptions || "{}");

  const metadata = await sharp(media.data).metadata();

  const originalOrientation =
    metadata.width < metadata.height ? "portrait" : "landscape";
  const originalAspectRatio = metadata.width / metadata.height;

  let clientAspectRatio;
  let width;
  let height;

  if (parsedCanvasOptions.size !== "original") {
    clientAspectRatio =
      parsedCanvasOptions.size.split(":")[0] /
      parsedCanvasOptions.size.split(":")[1];
  } else {
    parsedCanvasOptions.orientation === originalOrientation
      ? (clientAspectRatio = originalOrientation)
      : (clientAspectRatio = 1 / originalAspectRatio);
  }

  width = metadata.width;
  height = metadata.width / clientAspectRatio;

  const imagekit = new Imagekit({
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  });

  const textLeftPosition = Math.round(parsedTextOptions.left * width) / 375;
  const textTopPosition =
    Math.round(parsedTextOptions.top * height) / parsedCanvasOptions.height;

  const transformationString = `w-${width},h-${height}${
    originalAspectRatio > clientAspectRatio ? ",cm-pad-resize" : ""
  },bg-${parsedCanvasOptions.backgroundColor.substring(1)}${
    parsedTextOptions.text
      ? `,l-text,i-${parsedTextOptions.text},fs-${parsedTextOptions.fontSize}
   ,lx-${textLeftPosition},ly-${textTopPosition},co-${parsedTextOptions.color.substring(
          1
        )},l-end
   `
      : ""
  }`;

  imagekit
    .upload({
      file: media.data,
      fileName: media.name,
      folder: "test",
      transformation: { 
        pre: transformationString 
      },
    })
    .then(async (response) => {
      console.dir(response);
      return res.status(201).json("ok");
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};
