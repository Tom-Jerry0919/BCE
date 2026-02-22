import express from "express";

const router = express.Router();

// GET all courses
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Mathematics" },
    { id: 2, name: "Physics" },
    { id: 3, name: "Computer Science" },
  ]);
});

export default router;