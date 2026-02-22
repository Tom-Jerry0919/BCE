import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// 🔥 Load environment variables
dotenv.config();

const app = express();

// 🔥 Middleware
app.use(cors());
app.use(express.json());

// 🔥 Test Route
app.get("/", (req, res) => {
  res.send("🚀 College MS Backend Running");
});

// 🔥 MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

/* ================= ROUTES ================= */

// Import routes
import authRoutes from "./src/routes/authroute.js";
import studentRoutes from "./src/routes/studentroute.js";
import attendanceRoutes from "./src/routes/attendanceroute.js";
import teacherRoutes from "./src/routes/teacherroute.js";     // 🔥 Added
import courseRoutes from "./src/routes/courseroute.js";       // 🔥 Added

// Register routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/teachers", teacherRoutes);   
app.use("/api/courses", courseRoutes);    




app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});