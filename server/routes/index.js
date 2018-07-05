const router = require("express").Router();
const apiRoutes = require("./api");
const passportRoutes = require("./passport/passport");
//API routes
router.use("/api", apiRoutes);

router.use("/", passportRoutes);
//check user auth
// router
//     .route("/login")
//     // .post
//     .get((req, res) => {
//         res.send("all users route works!")
//     })

module.exports = router;