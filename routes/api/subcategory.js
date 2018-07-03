const router = require("express").Router();

// matches with "api/user/:id/subcategory"
router
    .route("/")
    //CREATE: create new subcategory
    .post()
    //READ: get an existing subcategory
    .get()
    //UPDATE: edit existing subcategory
    .put()
    //DELETE: remove existing subcategory
    .delete()

// matches with "/api/user/:id/subcategory/:subcategoryId/bookmark"
router
    .route("/:subcategoryId/bookmark")
    //READ: get all bookmarks from a subcategory
    .get()


module.exports = router;
