const service = require("./reviews.service");

const reviewExists = (req, res, next) => {
  service
    .read(req.params.reviewId)
    .then((data) => {
      if (data) {
        res.locals.review = data;
        return next();
      }

      return next({
        status: 404,
        message: "Review cannot be found.",
      });
    })
    .catch(next);
};

const list = (req, res, next) => {
  return service
    .list(req.params.movieId)
    .then((data) => res.json({ data }))
    .catch(next);
};

const update = (req, res, next) => {
  return service
    .update(req.body.data, req.params.reviewId)
    .then(() => {
      res.status(201).json({
        data: {
          ...res.locals.review,
          ...req.body.data,
          review_id: res.locals.review.review_id,
        },
      });
    })
    .catch(next);
};

const destroy = (req, res, next) => {
  service
    .delete(req.params.reviewId)
    .then(() => res.sendStatus(204))
    .catch(next);
};

module.exports = {
  list,
  delete: [reviewExists, destroy],
  update: [reviewExists, update],
};
