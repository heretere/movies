if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/movies", require("./movies/movies.router"));
app.use("/reviews", require("./reviews/reviews.router"));
app.use("/theaters", require("./theaters/theaters.router"));

app.use(require("./errors/not-found"));
app.use(require("./errors/error-handler"));

module.exports = app;
