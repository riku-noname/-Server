// /aolaserver/models/temphumid.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TempHumid = new Schema({
    //temperatureId: {type: String, require: true, unique: true},
    sensorId : {type: String, require: true, unique: true},
    year : {type: String, require: true},
    month : {type: String, require: true},
    day : {type: String, require: true},
    hour : {type: String, require: true},
    minute : {type: String, require: true},
    temperature: {type: String, require: true},
    humidity: {type: String, require: true}
});

module.exports = mongoose.model('temphumid', TempHumid);
