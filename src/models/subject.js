import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: String,
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }
});

export default mongoose.model("subject", subjectSchema);
