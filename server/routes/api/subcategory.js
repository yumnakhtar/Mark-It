const router = require("express").Router();
const subcategoriesController = require("../../controllers/subcategoriesController");


// matches with "api/user/:id/subcategory/"
router
    .route("/")
    //CREATE: create new subcategory
    .post(subcategoriesController.create)
    //READ: get all existing subcategories
    .get(subcategoriesController.findById)
    //UPDATE: edit existing subcategory
    .put(subcategoriesController.update)
    //DELETE: remove existing subcategory
    .delete(subcategoriesController.remove)

// matches with "/api/user/:id/subcategory/:subcategoryId/bookmark"
router
    .route("/:subcategoryId/bookmark")
    //READ: get all bookmarks from a subcategory
    .get(subcategoriesController.getBookmarks)


module.exports = router;
