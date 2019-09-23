// *****************************************************************************
// **** html-routes.js - this file offers a set of routes for displaying the 
// **** front end HTML via the Handlebars rendering engine
// ******************************************************************************
// *** Dependencies
// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function(app) {
 

  // GET route for "/" document (home page)
  ///////////////////////////////////////////
  app.get("/", function(req, res) {

    
    db.Burger.findAll({}).then(function(data) {
      var hbsObject = { burger_data : data };
      console.log(JSON.stringify(hbsObject, '', 2));
      res.render("index", hbsObject);
      
    });
  });

 
};
