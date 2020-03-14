const fs = require("fs");
const path = require("path");

require("dotenv").config();

// set global basedir path depending on the environment
if (process.env.NODE_ENV !== "development") {
  global.__basedir = path.resolve(__dirname, "../");
} else {
  global.__basedir = __dirname;
}

const expressApp = require("./expressApp");

expressApp.listen(process.env.PORT);


