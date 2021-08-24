const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/method-not-allowed");

router.use(
  "/:movieId([0-9]+)/theaters",
  controller.movieExists,
  require("../theaters/theaters.router")
);

router.use(
  "/:movieId([0-9]+)/reviews",
  controller.movieExists,
  require("../reviews/reviews.router")
);

router.route("/:movieId([0-9]+)").get(controller.read).all(methodNotAllowed);

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
