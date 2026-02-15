import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  marks: Number
});

export default mongoose.model("Marks", marksSchema);
