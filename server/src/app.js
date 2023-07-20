const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/mainRouter");
const bodyParser = require("body-parser");

const app = express();

app.use(morgan("dev"));

// server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// server.use(bodyParser.json({ limit: "50mb" }));

app.use(express.json());
// server.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", mainRouter);

module.exports = app;
