const router = require("express").Router();
const category = require("./category.js");
const subcategory = require("./subcategory.js");
const bookmark = require("./bookmark.js");

//matches with "/api/user"
router
    .route("/user")
    //CREATE: add new user to DB
    // .post()
    //READ: get all users from DB
    .get((req, res) => {
        res.send("all users route works!")
    })

//category routes
router.use("/user/:id/category", category)
//subcategory routes
router.use("/user/:id/subcategory", subcategory)
//bookmark routes
router.use("/user/:id/bookmark", bookmark)

module.exports = router;
