const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
  grocery_name: { type: String, default: null, required: true },
  grocery_email: { type: String, unique: true, required: true },
  grocery_password: { type: String, required: true },
  grocery_phone_number: { type: String, default: null, required: true },
  grocery_location: {
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
  grocery_picture: { type: String },
  grocery_description: { type: String, required: true },
  grocery_category: { type: String, required: true },
  grocery_state: { type: String, required: true },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

module.exports = mongoose.model("grocery", grocerySchema);