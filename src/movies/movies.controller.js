const service = require("./movies.service");

const movieExists = (req, res, next) => {
  const { movieId } = req.params;

  service
    .read(movieId)
    .then((data) => {
      if (data) {
        res.locals.movie = data;
        return next();
      }

      return next({
        status: 404,
        message: "Movie cannot be found.",
      });
    })
    .catch(next);
};

const list = (req, res, next) => {
  return service
    .list(req.query.is_showing)
    .then((data) => res.json({ data }))
    .catch(next);
};

const read = (req, res) => {
  return res.json({ data: res.locals.movie });
};

module.exports = {
  list,
  read: [movieExists, read],
  movieExists,
};
