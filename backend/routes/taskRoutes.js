const express = require("express");
const {
  getTasks,
  createTask,
  markTaskAsDone,
  deleteTask,
} = require("../controllers/taskController.js");

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id/done", markTaskAsDone);
router.delete("/:id", deleteTask);

module.exports = router;
