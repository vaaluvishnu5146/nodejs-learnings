const express = require("express");
const { getAllBlogs } = require("./Controllers/Blogs.controller");
const WEB_SERVER = express();

WEB_SERVER.get("/", async (req, res) => {
  let blogs;
  try {
    blogs = await getAllBlogs();
  } catch (error) {
    console.log(error);
  }
  res.render("pages/index", { data: blogs });
});

WEB_SERVER.get("/about", (req, res) => {
  res.render("pages/about");
});

WEB_SERVER.get("/createblog", (req, res) => {
  res.render("pages/createblog");
});

module.exports = WEB_SERVER;
