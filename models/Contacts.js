const Sequelize = require("sequelize");
const db = require("../config/database");

const Contact = db.define("contact", {
    user: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    purchaseZipCode: {
        type: Sequelize.STRING
    },
    notes: {
        type: Sequelize.STRING
    },
    lastContacted: {
        type: Sequelize.STRING
    },
    birthday: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    }
});

module.exports = Contact;
