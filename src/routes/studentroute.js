import express from "express";
import { addStudent, getStudents } from "../controllers/studentcontroler.js";
import authMiddleware from "../middleware/authmiddleware.js";
import roleMiddleware from "../middleware/rolemiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("admin"), addStudent);
router.get("/", authMiddleware, roleMiddleware("admin"), getStudents);

export default router;
