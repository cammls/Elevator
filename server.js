var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Log = require('./Model');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var router = express.Router();
var port = 3001;

// MLAB
// mongoose.connect('mongodb://elevator:elevator@ds135800.mlab.com:35800/elevator');
//   mongoose.connection.on('connected', function () {
//     console.log('Mongoose Mlab connection');
//   });
mongoose.connect('mongodb://localhost/webac');
  mongoose.connection.on('connected', function () {
    console.log('Mongoose local connection');
  });

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
    // console.log("REQ BODY: "+req.body.currentFloo)
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
