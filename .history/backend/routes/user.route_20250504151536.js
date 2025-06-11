import express from "express";
import { test } from "../controllers/user.controller.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/create", async (req, res) => {
  const userInfo = req.body;

  hashedPassword = await bcrypt.hash(userInfo.password, 10);

  await User.create({
    displayName: userInfo.displayName,
    username: userInfo.username,
    email: userInfo.email,
    img: userInfo.img,
    hashedPassword: hashedPassword,
  });
  res.json("user created!");
});

router.get("/test", test);

export default router;
