import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rollNo: String,
  department: String,
  year: Number
});

export default mongoose.model("Student", studentSchema);
