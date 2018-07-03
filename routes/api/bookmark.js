const router = require("express").Router();

// matches with "api/user/:id/bookmark"
router
    .route("/")
    //CREATE: create new bookmark
    .post()
    //READ: get an existing bookmark
    .get()
    //UPDATE: edit existing bookmark
    .put()
    //DELETE: remove existing bookmark
    .delete()

module.exports = router;
