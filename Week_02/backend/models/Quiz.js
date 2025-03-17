const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
    title: String,
    questions: [
        {
            question: String,
            options: [String],
            correctAnswer: String
        }
    ]
});

module.exports = mongoose.model("Quiz", QuizSchema);
