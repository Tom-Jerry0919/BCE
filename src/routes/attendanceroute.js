import express from "express";
import { markAttendance, getAttendance } from "../controllers/attendancecontroller.js";
import authMiddleware from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, markAttendance);
router.get("/:id", authMiddleware, getAttendance);

export default router;
