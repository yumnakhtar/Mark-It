const router = require("express").Router();
const apiRoutes = require("./api");

//API routes
router
    .route("/api", apiRoutes);

//check user auth
router
    .route("/login")
    // .post

module.exports = router;