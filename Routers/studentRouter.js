

const studentController = require("../controllers/studentController");

const express = require("express");

const router = express.Router();

router.get("/", studentController.sendStudent)
router.get("/:id", studentController.sendStudentById)
router.post("/", studentController.createStudent)
router.patch("/:id", studentController.updateStudent)
router.delete("/:id", studentController.deleteStudent)


module.exports = router