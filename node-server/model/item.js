const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, default: null },
  price: { type: String, default: null },
  quantity: { type: String, default: null },
  picture: { type: String, default: null },
  category: {type: mongoose.Schema.Types.ObjectId, ref: "Category"},
});

module.exports = mongoose.model("item", itemSchema);