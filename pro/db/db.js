const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "postgres://postgres@localhost:3001/prodb",
  {
    logging: false,
  }
);

module.exports = db;