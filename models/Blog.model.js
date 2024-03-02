const mongoose = require("mongoose");

// STEP 1: CREATE A SCHEMA
const BlogSchema = mongoose.Schema({
  blogName: {
    type: String,
    required: true,
  },
  blogCategory: {
    type: String,
    required: true,
  },
  blogDetails: {
    type: String,
    required: String,
  },
});

const BlogModel = mongoose.model("blogs", BlogSchema);
module.exports = BlogModel;
