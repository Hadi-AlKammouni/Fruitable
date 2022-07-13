const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  price: { type: String, default: null },
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  grocery: {type: mongoose.Schema.Types.ObjectId, ref: "Grocery"},
});

module.exports = mongoose.model("order", orderSchema);