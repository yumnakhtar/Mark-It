const router = require("express").Router();
const categoriesController = require("../../controllers/categoriesController");
// matches with "api/user/:id/category"
router
    .route("/")
    //CREATE: create new category
    .post(categoriesController.create)
    //READ: get an existing category
    .get(categoriesController.findById)  
    //UPDATE: edit existing category
    .put(categoriesController.update)
    //DELETE: remove existing category
    .delete(categoriesController.remove)

// matches with "/api/user/:id/category/:categoryId/bookmark"
router
    .route("/:categoryId/bookmark")
    //READ: get all bookmarks from a category
    .get(categoriesController.getBookmarks)

// matches with "/api/user/:id/category/:categoryId/subcategory"
router
    .route("/:categoryId/subcategory")
    //READ: get all subcategories of a category
    .get(categoriesController.getSubcategories)

module.exports = router;
