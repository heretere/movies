const path = require("path");

require("dotenv").config();

const {
  DATABASE_URL = "postgresql://rsskcpqj:jRYcNAFrDLyh9rybpW5IzDDC1dffYuZf@chunee.db.elephantsql.com/rsskcpqj",
  // DATABASE_URL = "postgresql://postgres:justin@localhost/postgres",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
  //
  // production: {
  //   client: "postgresql",
  //   connection: DATABASE_URL,
  //   pool: { min: 0, max: 5 },
  //   migrations: {
  //     directory: path.join(__dirname, "src", "db", "migrations"),
  //   },
  //   seeds: {
  //     directory: path.join(__dirname, "src", "db", "seeds"),
  //   },
  // },

  // development: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: ":memory:",
  //   },
  //   migrations: {
  //     directory: path.join(__dirname, "src", "db", "migrations"),
  //   },
  //   seeds: {
  //     directory: path.join(__dirname, "src", "db", "seeds"),
  //   },
  //   useNullAsDefault: true,
  // },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
