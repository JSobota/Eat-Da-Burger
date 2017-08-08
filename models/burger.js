var orm = require('../config/orm.js');

//Create Burger object
var burger = {
	//Select all burger table entries
	selectAll: function(cb) {
		orm.selectAll('burgers', function(res){
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb){
		orm.insertOne ('burgers', cols, vals, function(res){
			cb(res);
		});
	},

	updateOne: function(objColVals, condition, cb){
		orm.updateOne('burgers', objColVals, condition, function(res){
			cb(res);
		});
	}
};


// Export database for controller (burgerController.js)
module.exports = burger;