const BlogModel = require("../models/Blog.model");

function getAllBlogs(req, res) {
  return BlogModel.find();
}

function createABlog(req, res) {
  const Blog = new BlogModel(req.body);
  return Blog.save();
}

module.exports = {
  getAllBlogs,
  createABlog,
};
