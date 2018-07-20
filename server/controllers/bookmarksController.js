const db = require("../models");


module.exports = {
    create: function (req, res) {
        console.log("books create API")
        db.Bookmarks
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    findById: function (req, res) {
        db.Bookmarks
            .findAll({
                where: {
                    UserUuid: req.params.id
                }
            })
            .then((dbModel) => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    update: function (req, res) {
        // db.bookmarks
        res.send("something")

    },
    remove: function (req, res) {
        db.bookmarks
            .destroy({
                where: {
                    name: req.body.name,
                    UserUuid: req.body.UserUuid
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}