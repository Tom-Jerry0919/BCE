import mongoose from "mongoose";

const feeSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  total: Number,
  paid: Number,
  status: String
});

export default mongoose.model("Fee", feeSchema);
