// *** Dependencies
const express = require("express");
const bodyParser = require("body-parser");
// const passport = require("passport");
// const flash = require("connect-flash");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");

const routes = require("./routes");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//routes
app.use(routes);

// Start the API server
  db.sequelize.sync({force:true}).then(function() {
    app.listen(PORT, function() {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  });