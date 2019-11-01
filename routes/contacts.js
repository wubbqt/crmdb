const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Contacts = require("../models/Contacts");

router.get("/", (req, res) =>
    Contacts.findAll()
        .then(contacts => {
            console.log(contacts);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
);

module.exports = router;
