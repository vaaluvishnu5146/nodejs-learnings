const { getAllBlogs, createABlog } = require("../Controllers/Blogs.controller");

const BlogRouter = require("express").Router();

/**
 * Helps to get all the blogs
 */
BlogRouter.get("/", async (req, res) => {
  let blogs;
  console.log(req);
  try {
    blogs = await getAllBlogs(req, res);
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({
    message: "Blogs fetched successfully",
    data: blogs,
  });
});

/**
 * Helps to create a new blog
 */
BlogRouter.post("/create", async (req, res) => {
  try {
    const response = await createABlog(req);
    if (response && response._id) {
      return res.status(200).json({
        message: "Blogs Created successfully",
        success: true,
      });
    } else {
      return res.status(500).json({
        message: "Something went wrong",
        success: false,
      });
    }
  } catch (error) {
    return res.status(400).json({
      error: error,
      success: false,
    });
  }
});

module.exports = BlogRouter;
