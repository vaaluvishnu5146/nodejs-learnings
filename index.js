const express = require("express");
const APP_SERVER = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

// CONFIGURE ENVIRONMENT VARIABLES
dotenv.config();
console.log(process.env);

// INJECT VIEW ENGINE
APP_SERVER.set("view engine", "ejs");
APP_SERVER.use(bodyparser.json());

// ENABLE CORS
APP_SERVER.use(cors());

APP_SERVER.use(express.static("public"));

const hostname =
  process.env.NODE_ENVIRONMENT === "development"
    ? process.env.DEV_SERVER_HOSTNAME
    : process.env.PROD_SERVER_HOSTNAME;
const port =
  process.env.NODE_ENVIRONMENT === "development"
    ? process.env.DEV_SERVER_PORT
    : process.env.PROD_SERVER_PORT;

APP_SERVER.use("/", require("./webserver"));
APP_SERVER.use("/api", require("./app"));

APP_SERVER.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/ happily`);
});
