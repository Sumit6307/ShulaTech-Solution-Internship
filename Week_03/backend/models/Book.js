const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    reviews: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            rating: Number,
            comment: String
        }
    ],
    averageRating: { type: Number, default: 0 }
});

module.exports = mongoose.model("Book", BookSchema);
