// /aolaserver/models/sensor.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Sensor = new Schema({
    sensorId : {type: String, require: true, unique: true}
});

module.exports = mongoose.model('sensor', Sensor);
