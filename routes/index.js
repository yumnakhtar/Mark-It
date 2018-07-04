const Router = require("express").Router();
const ApiRoutes = require("./api");
//API routes
router
    .route("/api", ApiRoutes);

//check user auth
router
    .route("/login")
    // .post
    .get((req, res) => {
        res.send("all users route works!")
    })

module.exports = Router;