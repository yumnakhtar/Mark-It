const router = require("express").Router();
const bookmarksController = require("../../controllers/bookmarksController");


// matches with "api/user/:id/bookmark/"
router
    .route("/")
    //CREATE: create new bookmark
    .post(bookmarksController.create)
    //READ: get all existing bookmarks
    .get(bookmarksController.findById)
    //UPDATE: edit existing bookmark
    .put(bookmarksController.update)
    //DELETE: remove existing bookmark
    .delete(bookmarksController.remove)

module.exports = router;
