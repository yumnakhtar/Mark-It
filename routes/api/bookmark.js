const router = require("express").Router();

// matches with "api/user/:id/bookmark"
router
    .route("/")
    //CREATE: create new bookmark
    // .post()
    //READ: get an existing bookmark
    .get((req, res) => {
        res.send("matching bookmark route works!")
    })
    //UPDATE: edit existing bookmark
    // .put()
    //DELETE: remove existing bookmark
    // .delete()

module.exports = router;
