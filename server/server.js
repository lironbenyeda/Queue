var express = require('express'),
  app = express(),
  port = process.env.PORT || 80,
  mongoose = require('mongoose'),
  Questions = require('./api/models/questionModel'), //created model loading here
  Surveys = require('./api/models/surveyModel'), //created model loading here
  Users = require('./api/models/userModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Queue', { useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });


var questionRutes = require('./api/routes/questionRoutes'); //importing route
var surveyRoutes = require('./api/routes/surveyRoutes'); //importing route
var userRoutes = require('./api/routes/userRoutes'); //importing route
questionRutes(app); //register the route
surveyRoutes(app); //register the route
userRoutes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
