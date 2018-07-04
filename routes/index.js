const router = require("express").Router();
const ApiRoutes = require("./api");
//API routes
router
    .use("/api", ApiRoutes);

//check user auth
router
    .route("/login")
    // .post
    .get((req, res) => {
        res.send("all users route works!")
    })

module.exports = router;