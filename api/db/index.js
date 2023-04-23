const Sequelize = require("sequelize");

const db = new Sequelize(
  "axl",
  "micaelalozano",
  "6ataLgSRyxaIlz4BpHxANxldFFPD5hkP",
  {
    host: "dpg-cfr6pk2rrk052adj82c0-a",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
