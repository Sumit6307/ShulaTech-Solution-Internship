const express = require("express");
const Book = require("../models/Book");
const auth = require("../middleware/auth");

const router = express.Router();

// Get all books
router.get("/", async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// Add a book (Admin)
router.post("/", auth, async (req, res) => {
    const { title, author, genre } = req.body;
    const book = new Book({ title, author, genre });
    await book.save();
    res.status(201).json({ message: "Book Added" });
});

// Add review
router.post("/:id/review", auth, async (req, res) => {
    const { rating, comment } = req.body;
    const book = await Book.findById(req.params.id);

    if (!book) return res.status(404).json({ message: "Book Not Found" });

    book.reviews.push({ user: req.user.id, rating, comment });
    book.averageRating =
        book.reviews.reduce((acc, r) => acc + r.rating, 0) / book.reviews.length;
    await book.save();

    res.json({ message: "Review Added", book });
});

module.exports = router;
