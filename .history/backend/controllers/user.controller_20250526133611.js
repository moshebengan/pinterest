import User from "../models/user.model.js";

export const getUser = async (req, res) => {
    const {username} = req.params
    const user = await User.findOne({username})

    const {hashedPassword, ...others} = user._doc;
    return res.status(200).json(others)
}

export const registerUser = async (req, res) => {
    const {username} = req.params
    const user = await User.findOne({username})

    const {hashedPassword, ...others} = user._doc;
    return res.status(200).json(others)
}