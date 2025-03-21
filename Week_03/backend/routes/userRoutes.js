const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
    const { name, email, password, preferences } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = new User({ name, email, password: hashedPassword, preferences });
        await user.save();
        res.status(201).json({ message: "User Registered" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
});

module.exports = router;
