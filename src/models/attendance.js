import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  date: Date,
  status: String
});

export default mongoose.model("Attendance", attendanceSchema);
