import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { username, email, displayName, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  const newHashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    displayName,
    hashedPassword: newHashedPassword,
  });

  const { hashedPassword, ...others } = user.toObject();

  return res.status(201).json(others);
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 30,
  })

  const { hashedPassword, ...others} = user.toObject();

  return res.status(200).json(others);
};

export const logoutUser = async (req, res) => {
  const user = await User.findOneAndDelete(req.body);
  return res.status(200).json(user);
};

export const getUser = async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username });

  const { hashedPassword, ...others } = user._doc;
  return res.status(200).json(others);
};
