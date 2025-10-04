const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get latest 5 tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      where: { isCompleted: false },
      orderBy: { createdAt: "desc" },
      take: 5,
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Create a new task
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = await prisma.task.create({
      data: { title, description },
    });
    res.json(newTask);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Mark a task as done
const markTaskAsDone = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { isCompleted: true },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const existingTask = await prisma.task.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingTask) {
      return res.status(404).json({ error: "Task not found!" });
    }

    await prisma.task.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  getTasks,
  createTask,
  markTaskAsDone,
  deleteTask,
};
