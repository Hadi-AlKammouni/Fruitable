const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema({
  order: {type: mongoose.Schema.Types.ObjectId, ref: "order"},
  item: {type: mongoose.Schema.Types.ObjectId, ref: "item"},
});

module.exports = mongoose.model("element", elementSchema);