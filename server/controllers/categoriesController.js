const db = require("../models");


module.exports = {
    create: (req, res) => {
        db.Categories
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));


    },
    findById: function (req, res) {
        db.Categories
            .findAll({
                where: {
                    UserUuid: req.params.id
                }
            })
            .then((dbModel) => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        // db.Categories

    },
    remove: function (req, res) {
        db.Categories
            .destroy({
                where: {
                    name: req.body.name,
                    UserUuid: req.body.UserUuid
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getBookmarks: function (req, res) {
        db.Bookmarks
            .findAll({
                where: {
                    UserUuid: req.params.id,
                    CategoryId: req.params.categoryId
                }
            })
            .then((dbModel) => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getSubcategories: function (req, res) {
        db.Subcategories
            .findAll({
                where: {
                    UserUuid: req.params.id,
                    CategoryId: req.params.categoryId
                }
            })
            .then((dbModel) => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}