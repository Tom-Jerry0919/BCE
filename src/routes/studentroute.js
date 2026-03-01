import express from "express";
import { addStudent, getStudents } from "../controllers/studentcontroler.js";
import authMiddleware from "../middleware/authmiddleware.js";
import roleMiddleware from "../middleware/rolemiddleware.js";
import rateLimit from "express-rate-limit";

const router = express.Router();

const studentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs for these routes
});

router.post("/", authMiddleware, roleMiddleware("admin"), studentLimiter, addStudent);
router.get("/", authMiddleware, roleMiddleware("admin"), studentLimiter, getStudents);

export default router;
