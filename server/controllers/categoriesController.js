const db = require("../models");


module.exports= {
    create: function(req, res) {
        // db.Categories
        res.send("something")

    },
    findById: function(req, res) {
        console.log(req.query)
        db.Categories
            .findAll(req.query)
            .then((dbModel) => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req,res) {
        // db.Categories
        res.send("something")

    },
    remove: function(req,res) {
        // db.Categories
        res.send("something")

    },
    getBookmarks: function(req, res) {
        //which db to access?
        res.send("something")

    },
    getSubcategories: function(req, res)  {
        //re-evaluate categories relationships
        //which db to acces?
        res.send("something")

    }
}