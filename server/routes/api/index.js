const router = require("express").Router();
// const category = require("./category.js");
// const subcategory = require("./subcategory.js");
// const bookmark = require("./bookmark.js");
// const usersController = require("../../controllers/bookmarksController");
const categoriesController = require("../../controllers/categoriesController");
const subcategoriesController = require("../../controllers/subcategoriesController");
const bookmarksController = require("../../controllers/bookmarksController");



//////////////category routes/////////////////
router
    .route("/user/:id/category/")
    ////////////////working
    .post(categoriesController.create)
    //READ: get all existing categories
    ////////////////working
    .get(categoriesController.findById)
    
router
    .route("/user/:id/category/:categoryId")
    //UPDATE: edit existing category
    .put(categoriesController.update)
    //DELETE: remove existing category
    ///////////////working
    .delete(categoriesController.remove)

router
    .route("/user/:id/category/:categoryId/bookmark")
    //READ: get all bookmarks from a category
    ////////////////working
    .get(categoriesController.getBookmarks)

router
    .route("/user/:id/category/:categoryId/subcategory")
    //READ: get all subcategories of a category
    ////////////////working
    .get(categoriesController.getSubcategories)

//////////////subcategory routes//////////////
// router.use("/user/:id/subcategory", subcategory)

router
    .route("/user/:id/subcategory/")
    //CREATE: create new subcategory
    ////////////////working
    .post(subcategoriesController.create)
    //READ: get all existing subcategories
    ////////////////working
    .get(subcategoriesController.findById)

router
    .route("/user/:id/subcategory/:subcategoryId")
    //UPDATE: edit existing subcategory
    .put(subcategoriesController.update)
    //DELETE: remove existing subcategory
    ///////////////working
    .delete(subcategoriesController.remove)

router
    .route("/user/:id/subcategory/:subcategoryId/bookmark")
    //READ: get all bookmarks from a subcategory
    ////////////////working
    .get(subcategoriesController.getBookmarks)



//////////////bookmark routes//////////////
// router.use("/user/:id/bookmark", bookmark)

router
    .route("/user/:id/bookmark/")
    //CREATE: create new bookmark
    ///////////////working
    .post(bookmarksController.create)
    //READ: get all existing bookmarks
    ////////////////working
    .get(bookmarksController.findById)

router
    .route("/user/:id/bookmark/:bookmarkId")
    //UPDATE: edit existing bookmark
    .put(bookmarksController.update)
    //DELETE: remove existing bookmark
    ///////////////working
    .delete(bookmarksController.remove)

module.exports = router;
