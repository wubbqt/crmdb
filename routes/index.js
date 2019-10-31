var router = require("express").Router();

const apiRoutes = require("./api");
router.use("/api", apiRoutes);

const htmlRoutes = require("./html-routes");
router.use(htmlRoutes);

module.exports = router;