const express = require("express");

const tasksRouter = require("./tasks");

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "API is running successfully",
  });
});

router.use("/tasks", tasksRouter);

router.post("/feedback", (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({
      success: false,
      error: "Name and message are required.",
    });
  }

  return res.status(201).json({
    success: true,
    feedback: {
      name,
      message,
    },
  });
});

module.exports = {
  router,
};