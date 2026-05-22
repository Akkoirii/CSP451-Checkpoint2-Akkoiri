const express = require("express");
const router = express.Router();

const {
  validateLoginInput,
  authenticateUser,
} = require("../services/authService");

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "API is running successfully",
  });
});

router.post("/auth/login", (req, res) => {
  const { username, password } = req.body;

  const validation = validateLoginInput(username, password);

  if (!validation.isValid) {
    return res.status(400).json({
      success: false,
      errors: validation.errors,
    });
  }

  const authResult = authenticateUser(username, password);

  if (!authResult.success) {
    return res.status(401).json(authResult);
  }

  return res.json({
    success: true,
    user: authResult.user,
  });
});

module.exports = router;