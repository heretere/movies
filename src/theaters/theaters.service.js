const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

const reduce = reduceProperties("theater_id", {
  title: ["movies", null, "title"],
  runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
  rating: ["movies", null, "rating"],
  description: ["movies", null, "description"],
  image_url: ["movies", null, "image_url"],
  created_at: ["movies", null, "created_at"],
  updated_at: ["movies", null, "updated_at"],
  is_showing: ["movies", null, "is_showing"],
  theater_id: ["movies", null, "theater_id"],
  movie_id: ["movies", null, "movie_id"],
});

const list = (movieId) => {
  let connection = knex({ t: "theaters" })
    .select("*")
    .join({ mt: "movies_theaters" }, "t.theater_id", "mt.theater_id")
    .join({ m: "movies" }, "m.movie_id", "mt.movie_id");

  if (movieId) {
    connection = connection.where("m.movie_id", movieId);
  }

  return connection.then((data) => {
    return reduce(data);
  });
};

module.exports = {
  list,
};
