const db = require("../models");


module.exports= {
    create: function(req, res) {
        // db.subcategories
        res.send("something")

    },
    findById: function(req, res) {
        db.Subcategories
        .findAll({
            where: {
                UserId: req.params.id
            }
        })
        .then((dbModel) => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req,res) {
        // db.subcategories
        res.send("something")

    },
    remove: function(req,res) {
        // db.subcategories
        res.send("something")

    },
    getBookmarks: function(req, res) {
        db.Bookmarks
        .findAll({
            where: {
                UserId: req.params.id,
                SubcategoryId: req.params.subcategoryId
            }
        })
        .then((dbModel) => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    }
}