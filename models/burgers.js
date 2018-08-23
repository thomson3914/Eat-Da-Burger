// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    })
  },

  update: function (id, cb) {
    orm.update("burgers", id, cb);
  },

  create: function(name, cb){
    orm.create('burgers', name, cb);
  },

  delete: function(condition, cb) {
    orm.delete("burgers", condition, cb);
  } 

}

module.exports = burger;
