import express from "express";

const router = express.Router();

// GET all teachers
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Mr. Kumar" },
    { id: 2, name: "Ms. Priya" },
  ]);
});

export default router;