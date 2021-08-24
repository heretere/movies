const knex = require("../db/connection");
const convertObject = require("../utils/convert-object");

const convertReview = convertObject({
  name: "critic",
  columns: {
    organization_name: "critics.organization_name",
    surname: "critics.surname",
    preferred_name: "critics.preferred_name",
  },
});

const read = async (review_id) => {
  let review = await knex({ r: "reviews" })
    .select("r.*", "c.*")
    .join({ c: "critics" }, "r.critic_id", "=", "c.critic_id")
    .where({ review_id })
    .first();

  if (review) {
    review = convertReview(review);
  }

  return review;
};

const list = async (movieId) => {
  let connection = knex({ r: "reviews" })
    .select("*")
    .join({ c: "critics" }, "r.critic_id", "=", "c.critic_id");

  if (movieId) {
    connection = connection.where("r.movie_id", movieId);
  }

  let reviews = await connection;

  return reviews.map(convertReview);
};

const update = async (review, review_id) => {
  return knex("reviews").update(review).where({ review_id });
};

const destroy = (reviewId) => {
  return knex("reviews").where("review_id", reviewId).del();
};

module.exports = {
  list,
  update,
  read,
  delete: destroy,
};
