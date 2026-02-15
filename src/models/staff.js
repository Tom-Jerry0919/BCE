import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  department: String,
  subjects: [String]
});

export default mongoose.model("staff", teacherSchema);
