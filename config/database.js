const Sequelize = require("sequelize");

module.exports = new Sequelize("crm", "root", "password", {
    host: "localhost",
    dialect: "mysql"
});
