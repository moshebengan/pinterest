import { getPins } from "../controllers/pin.controller.js";
import express from "express";

const router = express.Router();

router.get("/", getPins);

export default router;
