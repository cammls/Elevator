var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Log = require('./Model');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
 });
var router = express.Router();
var port = 3001;

// MLAB
mongoose.connect('mongodb://elevator:elevator@ds135800.mlab.com:35800/elevator');
  mongoose.connection.on('connected', function () {
    console.log('Mongoose Mlab connection');
  });
// mongoose.connect('mongodb://localhost/webac');
//   mongoose.connection.on('connected', function () {
//     console.log('Mongoose local connection');
//   });

  router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
  });

  router.route('/logs')
  .get(function(req, res) {
    Log.find(function(err, logs) {
      if (err)
      res.send(err);
      res.json(logs)
    });
  })
  .post(function(req, res) {
    var log = new Log();
    log.currentFloor = req.body.currentFloor;
    log.targetFloor = req.body.targetFloor;
    log.save(function(err) {
      if (err)
      res.send(err);
      res.json({ message: 'elevator moved' });
    });
  });
  //Use our router configuration when we call /api

  app.use('/api', router);
  //starts the server and listens for requests
  app.listen(port, function() {
 console.log("api running on port "+port);
});
