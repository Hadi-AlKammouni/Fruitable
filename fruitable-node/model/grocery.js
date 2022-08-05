const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  phone_number: { type: String, default: null },
  latitude: { type: Number, default: null},
  longitude: { type: Number, default: null},
  picture: { type: String, default: null },
  description: { type: String, default: null  },
  token: { type: String },
  categories: { type: Array, default: null },
  items: [{type: mongoose.Schema.Types.ObjectId, ref: "item"}],
  reviews: [{
    rate: {type: Number},
    text: {type: String},
    first_name: { type: String},
    user: {type: mongoose.Schema.Types.ObjectId}    
  }],
  orders: [{type: mongoose.Schema.Types.ObjectId, ref: "order"}],
});

module.exports = mongoose.model("grocery", grocerySchema);