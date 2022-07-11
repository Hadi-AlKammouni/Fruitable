const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  user_type: { type: String, defualt: 0 },
  token: { type: String },
  gender: { type: String, default: null },
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
  profile_picture: { type: String, default: null },
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: "review"}],
  orders: [{type: mongoose.Schema.Types.ObjectId, ref: "order"}],
});

module.exports = mongoose.model("user", userSchema);