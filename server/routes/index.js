const router = require("express").Router();
const apiRoutes = require("./api");
const passportRoutes = require("./passport/passport");

//API routes
router.use("/api", apiRoutes);

router.use("/", passportRoutes);

module.exports = router;