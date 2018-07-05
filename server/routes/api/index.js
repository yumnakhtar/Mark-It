const router = require("express").Router();
// const category = require("./category.js");
// const subcategory = require("./subcategory.js");
// const bookmark = require("./bookmark.js");
// const usersController = require("../../controllers/bookmarksController");
const categoriesController = require("../../controllers/categoriesController");

// //matches with "/api/user"
// router
//     .route("/user")
//     .post(usersController.create)
//     .get(usersController.findAll)


//////////////category routes/////////////////
// router.use("/user/:id/category", category)
router
    .route("/user/:id/category/")
    //CREATE: create new category
    .post(categoriesController.create)
    //READ: get all existing categories
    //working
    .get(categoriesController.findById)  
    //UPDATE: edit existing category
    .put(categoriesController.update)
    //DELETE: remove existing category
    .delete(categoriesController.remove)

router
    .route("/api/user/:id/category/:categoryId/bookmark")
    //READ: get all bookmarks from a category
    .get(categoriesController.getBookmarks)

router
    .route("/api/user/:id/category/:categoryId/subcategory")
    //READ: get all subcategories of a category
    .get(categoriesController.getSubcategories)

//////////////subcategory routes//////////////
// router.use("/user/:id/subcategory", subcategory)

router
    .route("api/user/:id/subcategory/")
    //CREATE: create new subcategory
    .post(subcategoriesController.create)
    //READ: get all existing subcategories
    .get(subcategoriesController.findById)
    //UPDATE: edit existing subcategory
    .put(subcategoriesController.update)
    //DELETE: remove existing subcategory
    .delete(subcategoriesController.remove)

router
    .route("/api/user/:id/subcategory/:subcategoryId/bookmark")
    //READ: get all bookmarks from a subcategory
    .get(subcategoriesController.getBookmarks)



//////////////bookmark routes//////////////
// router.use("/user/:id/bookmark", bookmark)

router
    .route("api/user/:id/bookmark/")
    //CREATE: create new bookmark
    .post(bookmarksController.create)
    //READ: get all existing bookmarks
    .get(bookmarksController.findById)
    //UPDATE: edit existing bookmark
    .put(bookmarksController.update)
    //DELETE: remove existing bookmark
    .delete(bookmarksController.remove)

module.exports = router;
