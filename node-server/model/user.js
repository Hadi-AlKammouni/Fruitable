const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  user_type: { type: String, defualt: 0 },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);