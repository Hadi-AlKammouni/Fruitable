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
});

module.exports = mongoose.model("grocery", grocerySchema);