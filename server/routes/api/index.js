const router = require("express").Router();
const categoriesController = require("../../controllers/categoriesController");
const subcategoriesController = require("../../controllers/subcategoriesController");
const bookmarksController = require("../../controllers/bookmarksController");



//////////////category routes/////////////////
router
    .route("/user/:id/category/")
    .post(categoriesController.create)
    //READ: get all existing categories
    .get(categoriesController.findById)
    
router
    .route("/user/:id/category/:categoryId")
    //UPDATE: edit existing category
    .put(categoriesController.update)
    //DELETE: remove existing category
    .delete(categoriesController.remove)

router
    .route("/user/:id/category/:categoryId/bookmark")
    //READ: get all bookmarks from a category
    .get(categoriesController.getBookmarks)

router
    .route("/user/:id/category/:categoryId/subcategory")
    //READ: get all subcategories of a category
    .get(categoriesController.getSubcategories)

//////////////subcategory routes//////////////
// router.use("/user/:id/subcategory", subcategory)

router
    .route("/user/:id/subcategory/")
    //CREATE: create new subcategory
    .post(subcategoriesController.create)
    //READ: get all existing subcategories
    .get(subcategoriesController.findById)

router
    .route("/user/:id/subcategory/:subcategoryId")
    //UPDATE: edit existing subcategory
    .put(subcategoriesController.update)
    //DELETE: remove existing subcategory
    .delete(subcategoriesController.remove)

router
    .route("/user/:id/subcategory/:subcategoryId/bookmark")
    //READ: get all bookmarks from a subcategory
    .get(subcategoriesController.getBookmarks)



//////////////bookmark routes//////////////
// router.use("/user/:id/bookmark", bookmark)

router
    .route("/user/:id/bookmark/")
    //CREATE: create new bookmark
    .post(bookmarksController.create)
    //READ: get all existing bookmarks
    .get(bookmarksController.findById)

router
    .route("/user/:id/bookmark/:bookmarkId")
    //UPDATE: edit existing bookmark
    .put(bookmarksController.update)
    //DELETE: remove existing bookmark
    .delete(bookmarksController.remove)

module.exports = router;
