import User from "../models/user.model.js";
import bcrypt from "bcryptjs";



export const registerUser = async (req, res) => {
    const {username, email, displayName, password} = req.body

    if (!username || !email  || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    const newHashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        username,
        email,
        displayName,
        hashedPassword: newHashedPassword
    })  

    const {hashedPassword, ...others} = user._doc;

    return res.status(201).json(others)
}

export const loginUser = async (req, res) => {
    const user = await User.findOne(req.body)
    return res.status(200).json(user)
}

export const logoutUser = async (req, res) => {
    const user = await User.findOneAndDelete(req.body)
    return res.status(200).json(user)
}

export const getUser = async (req, res) => {
    const {username} = req.params
    const user = await User.findOne({username})

    const {hashedPassword, ...others} = user._doc;
    return res.status(200).json(others)
}