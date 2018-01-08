const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
    console.log("before route..");
  noteRoutes(app, db);
  console.log("after route");
  // Other route groups could go here, in the future
};