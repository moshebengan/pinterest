import express from "express"
import { getPin, getPins, createPin } from "../controllers/pin.controller.js"
import { verifyToken } from "../middleware/verifyToken.js";



const router = express.Router()

router.get("/", getPins);
router.get("/:id", getPin);
router.post("/",verifyToken, createPin);

export default router