import Student from "../models/student.js";

export const addStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
};

export const getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};
