// Require NPMs
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 7800;

var app = express();

// Send content for the app from the public directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

//Override w/ Post 
app.use(methodOverride('_method'));

//Set handlebars as the view engine
var expressHandlebars = require ('express-handlebars');

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Import routes and provide server access to them
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);