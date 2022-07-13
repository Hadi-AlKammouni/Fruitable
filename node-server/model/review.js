const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rates: { type: String, default: null },
  text: { type: String, default: null },
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  grocery: {type: mongoose.Schema.Types.ObjectId, ref: "Grocery"},
});

module.exports = mongoose.model("review", reviewSchema);