import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: String,
  department: String,
  duration: Number
});

export default mongoose.model("course", courseSchema);
