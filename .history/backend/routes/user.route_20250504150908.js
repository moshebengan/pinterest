import express from "express"
import { test } from "../controllers/user.controller.js"



const router = express.Router()

router.post("/create", (req, res) => {
    const userInfo = req.body    
    console.log(userInfo)
    res.json("user created!")
})

router.get("/test", test)

export default router