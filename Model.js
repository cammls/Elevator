var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
var LogSchema = new Schema({
 currentFloor: Number,
 targetFloor: Number,
 time : { type : Date, default: Date.now }
});
//export our module to use in server.js
module.exports = mongoose.model('Log', LogSchema);
