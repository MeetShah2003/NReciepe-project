const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, default: "user" },
});

const userModel = new mongoose.model("user51", userSchema);

module.exports = { userModel };
