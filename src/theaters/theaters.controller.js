const service = require("./theaters.service");

const list = (req, res, next) => {
  service
    .list(req.params.movieId)
    .then((data) => res.json({ data }))
    .catch(next);
};

module.exports = {
  list,
};
