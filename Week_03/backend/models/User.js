const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    preferences: [String]  // Genres user likes
});

module.exports = mongoose.model("User", UserSchema);
