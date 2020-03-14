const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");

const router = require("./routes");
const response = require("./response");

const app = express();

app.disable("x-powered-by");
app.use(cors());
app.options("*", cors());
app.use(morgan("combined")); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials, Api-Key"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.set("view engine", "js");
app.set("views", path.join(__dirname, "/views"));
// app.engine("js", require("express-react-views").createEngine());
app.use(express.static(path.join(__dirname, "/views")));


router(app);

// Error handler
app.use((error, req, res, next) => {
  const status = error.status || 500;
  res
    .status(status)
    .json(
      response.error({ message: "Something went wrong. Please try again" })
    );
});


module.exports = app;
