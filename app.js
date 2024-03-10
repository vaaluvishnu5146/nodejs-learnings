const express = require("express");
const connectToMongoDB = require("./database.config");
const API_SERVER = express();

// DATABASE CONNECTION INITIATION
connectToMongoDB();

API_SERVER.use("/blogs", require("./routers/blog.router"));
API_SERVER.use("/auth", require("./routers/auth.router"));

module.exports = API_SERVER;
