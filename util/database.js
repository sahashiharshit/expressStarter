const Sequelize = require("sequelize");
const sequelize = new Sequelize("shop", "harshit", "19962024", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
