const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./config/database");

//test
db.authenticate()
    .then(() => console.log("database connected..."))
    .catch(err => console.log("error: " + err));

app.get("/", (req, res) => res.send("index"));
app.listen(PORT, console.log(`Server started on port ${PORT}`));

app.use("/contacts", require("./routes/contacts"));
