import express from "express";
import { markAttendance, getAttendance } from "../controllers/attendancecontroller.js";
import authMiddleware from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, markAttendance);
router.get("/:id", authMiddleware, getAttendance);
router.get("/attendance/:studentId", async (req, res) => {
  try {
    const attendance = await Attendance.find({
      student: req.params.studentId,
    });

    res.json(attendance);
  } catch (err) {
    res.status(500).json({ message: "Error fetching attendance" });
  }
});
export default router;
