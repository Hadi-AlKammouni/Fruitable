const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, default: null },
  picture: { type: String, default: null },
  items: [{type: mongoose.Schema.Types.ObjectId, ref: "item"}],
});

module.exports = mongoose.model("category", categorySchema);