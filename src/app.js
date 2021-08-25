require("dotenv").config();
const express = require("express");
const app = express();

const { CORS_ORIGIN = "http://localhost:3000" } = process.env;

const cors = require("cors");

console.log(CORS_ORIGIN);
app.use(
  cors({
    origin: CORS_ORIGIN,
  })
);

app.use(express.json());

app.use("/movies", require("./movies/movies.router"));
app.use("/reviews", require("./reviews/reviews.router"));
app.use("/theaters", require("./theaters/theaters.router"));

app.use(require("./errors/not-found"));
app.use(require("./errors/error-handler"));

module.exports = app;
