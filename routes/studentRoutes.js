const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent,
  createStudentRollCall,
} = require("../controllers/studentController");

router.get("/", getStudents);
router.get("/:id", getStudentById);
router.post(
  "/",
  body("classroom", "classroom is string and Classroom is required")
    .isString()
    .not()
    .isEmpty(),
  body("fullName", "fullName is string and full name is required")
    .isString()
    .not()
    .isEmpty(),
  body("email", "email is email and email is required")
    .isEmail()
    .not()
    .isEmpty(),
  body(
    "phoneNumber",
    "phoneNumber is number and number is required, phoneNumber length must be less than 20"
  )
    .isLength({ max: 20 })
    .isNumeric()
    .not()
    .isEmpty(),
  createStudent
);
router.post("/:id/rollcall", createStudentRollCall);
router.delete("/:id", deleteStudent);
router.put("/:id", updateStudent);

module.exports = router;
