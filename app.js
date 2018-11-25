var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var port = process.env.PORT || 4000; // Set default port or assign a port in enviornment

var indexRouter = require('./routes/index');

var mongoose = require('mongoose');

mongoose.connect('mongodb://cms:cms1234@ds057528.mlab.com:57528/cms', { useNewUrlParser: true }, function(err,db){
  if(err)
  	throw err;
   console.log("Database connected!");
 
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//serving static files
app.use(express.static(path.join(__dirname, 'views')));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', indexRouter);


console.log('server is running');
