const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  phone_number: { type: String, default: null },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: false,
    },
    coordinates: {
      type: [Number],
      required: false,
    },
  },
  picture: { type: String, default: null },
  description: { type: String, default: null  },
  token: { type: String },
  items: [{type: mongoose.Schema.Types.ObjectId, ref: "item"}],
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: "review"}],
});

module.exports = mongoose.model("grocery", grocerySchema);