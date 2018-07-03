const router = require("express").Router();

// matches with "api/user/:id/category"
router
    .route("/")
    //CREATE: create new category
    // .post()
    //READ: get an existing category
    .get((req, res) => {
        "matching category route works!"
    })  
    //UPDATE: edit existing category
    // .put()
    //DELETE: remove existing category
    // .delete()

// matches with "/api/user/:id/category/:categoryId/bookmark"
router
    .route("/:categoryId/bookmark")
    //READ: get all bookmarks from a category
    .get((req, res) => {
        "all bookmark route works!"
    })

// matches with "/api/user/:id/category/:categoryId/subcategory"
router
    .route("/:categoryId/subcategory")
    //READ: get all subcategories of a category
    .get((req, res) => {
        "all subcats route works!"
    })

module.exports = router;
