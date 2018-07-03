const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;






app.use(routes);

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });