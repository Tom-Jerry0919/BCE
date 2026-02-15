import Attendance from "../models/attendance.js";

export const markAttendance = async (req, res) => {
  const attendance = await Attendance.create(req.body);
  res.json(attendance);
};

export const getAttendance = async (req, res) => {
  const data = await Attendance.find({ studentId: req.params.id });
  res.json(data);
};
