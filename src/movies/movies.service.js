const knex = require("../db/connection");

const list = (isShowing) => {
  const request = knex({ m: "movies" }).distinct("m.*");

  if (isShowing !== undefined) {
    return request
      .join({ mt: "movies_theaters" }, "m.movie_id", "=", "mt.movie_id")
      .where("mt.is_showing", isShowing === "true");
  }

  return request;
};

const read = (movie_id) => {
  return knex("movies").select("*").where("movie_id", movie_id).first();
};

module.exports = {
  list,
  read,
};
