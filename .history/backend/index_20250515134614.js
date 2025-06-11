import express from "express";
import userRouter from "./routes/user.route.js";
import boardRouter from "./routes/board.route.js";
import commentRouter from "./routes/comment.route.js";
import pinRouter from "./routes/pin.route.js";
import connectDB from "./utils/connectDB.js";

const app = express();
app.use(express.json());
app.use(cors({origin: import.meta.env.CLIENT_URL}));

app.use("/users", userRouter);

app.use("/board", boardRouter);

app.use("/comment", commentRouter);

app.use("/pin", pinRouter);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3001");
});
