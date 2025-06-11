import { Schema } from "mongoose";

const pinSchema = new Schema(
  {
    media: {
      type: String,
      required: true,
    },
    width: {
      type: number,
      required: true,
    },
    height: {
      type: number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    board: {
        type: Schema.Types.ObjectId,
        ref: "Board",
    },
    tags: {
      type: [String],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", pinSchema);
