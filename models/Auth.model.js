const mongoose = require("mongoose");

// STEP 1: CREATE A SCHEMA
const AuthSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  dob: {
    type: String,
    required: false,
  },
  gender: { type: String, required: false },
  subscription: {
    type: mongoose.Types.ObjectId,
    required: false,
  },
});

const AuthModel = mongoose.model("user", AuthSchema);
module.exports = AuthModel;
