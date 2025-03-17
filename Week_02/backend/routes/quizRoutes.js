const express = require("express");
const Quiz = require("../models/Quiz");
const auth = require("../middleware/auth");

const router = express.Router();

// Get all quizzes
router.get("/", async (req, res) => {
    const quizzes = await Quiz.find();
    res.json(quizzes);
});

// Add a new quiz (Admin)
router.post("/", auth, async (req, res) => {
    const { title, questions } = req.body;
    const quiz = new Quiz({ title, questions });
    await quiz.save();
    res.status(201).json({ message: "Quiz Created" });
});

module.exports = router;
