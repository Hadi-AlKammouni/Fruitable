const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
  grocery_name: { type: String,default: null },
  grocery_email: { type: String, unique: true },
  grocery_password: { type: String },
  grocery_phone_number: { type: String, default: null },
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
  grocery_description: { type: String },
  grocery_category: { type: String },
  grocery_state: { type: String },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

module.exports = mongoose.model("grocery", grocerySchema);