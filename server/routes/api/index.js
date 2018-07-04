const router = require("express").Router();
const category = require("./category.js");
const subcategory = require("./subcategory.js");
const bookmark = require("./bookmark.js");
const usersController = require("../../controllers/booksController");

//matches with "/api/user"
router
    .route("/user")
    .post(usersController.create)
    .get(usersController.findAll)

//category routes
router.use("/user/:id/category", category)
//subcategory routes
router.use("/user/:id/subcategory", subcategory)
//bookmark routes
router.use("/user/:id/bookmark", bookmark)

module.exports = router;
