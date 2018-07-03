const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;






app.use(routes);

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });