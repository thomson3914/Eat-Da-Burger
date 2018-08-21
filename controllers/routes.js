var express = require("express");

var router = express.Router();

var burger = require('../models/burgers.js');

router.get("/", function(req, res) {
  burger.all(function(burger_data){
    // console.log(burger_data); 
    res.render("index", {burger_data});
  })
})

router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result){
    // console.log(result);
    res.redirect('/');
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result){
    res.redirect('/');
  })
})


router.delete("/burgers/delete", function(req, res) {
  burger.delete(req.body.burger_id, function(result) {
    res.redirect("/");
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.delete("/burgers/delete", function(req, res) {
  // let condition = `id = ${req.params.id}`;
  // let condition = "id = " + req.params.id;
  // console.log("router condition", condition); 

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });



// Export routes for server.js to use.
module.exports = router;
