const express = require("express");

const router = express.Router();

const tasks = [];

router.get("/", (req, res) => {
  res.json({
    success: true,
    tasks,
  });
});

router.post("/", (req, res) => {
  const { title, priority } = req.body;

  if (!title || title.trim().length < 3) {
    return res.status(400).json({
      success: false,
      error: "Task title must contain at least 3 characters.",
    });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    priority: priority || "normal",
  };

  tasks.push(newTask);

  return res.status(201).json({
    success: true,
    task: newTask,
  });
});

module.exports = router;