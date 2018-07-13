const db = require("../models");
const passport = require('passport');


// Defining methods for the UserController
module.exports = {

  findAll: function (req, res) {
    db.User
      .findAll()
      .then(dbUser => {
        let users = [];
        dbUser.forEach(user => {
          users.push({
            uuid: user.dataValues.uuid,
            email: user.dataValues.email,
            createdAt: user.dataValues.createdAt
          });
        })
        res.json(users);
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    if (checkAuthentication) {
      db.User
        .findById(getCurrentuserId(req))
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    }
  },
  getCurrentuserId: function (req) {
    let userId;
    if (req.isAuthenticated()) {
      userId = req.session.passport.user;
      console.log(`user: ${userId}`);
    } else {
      userId = false
    }
    return userId
  },
  checkAuthentication: function (req) {
    if (req.isAuthenticated()) {
      return true
    }
    else {
      return false
    }
  }

};

