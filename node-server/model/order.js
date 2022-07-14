const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  total_price: { type: String, default: null },
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  grocery: {type: mongoose.Schema.Types.ObjectId, ref: "Grocery"},
  items: [{
    name: {type: String},
    price: {type: Number},
    picture: { type: String},
    user: {type: mongoose.Schema.Types.ObjectId}    
  }],
});

module.exports = mongoose.model("order", orderSchema);