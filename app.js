const express = require("express");
const connectToMongoDB = require("./database.config");
const { BlogsShield } = require("./Middleware/BlogsMiddleware");
const API_SERVER = express();

// DATABASE CONNECTION INITIATION
connectToMongoDB();

API_SERVER.use("/blogs", BlogsShield, require("./routers/blog.router"));
API_SERVER.use("/auth", require("./routers/auth.router"));

module.exports = API_SERVER;
