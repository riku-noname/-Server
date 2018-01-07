//routes/postreserve.js
//フロントエンドから来たPOSTリクエストの処理を行う

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');
var fs = require('fs');

// モデルの宣言
var TempHumid = require('../models/temphumid');

router.post('/', function(request, response){
    console.log("catch the post request");
    response.setHeader('Content-Type', 'text/plain');

    // パラメータ名を出力
    console.log(request.body.sensorId);
    console.log(request.body.year);
    console.log(request.body.month);
    console.log(request.body.day);
    console.log(request.body.hour);
    console.log(request.body.minute);
    console.log(request.body.temperature);
    console.log(request.body.humidity);

    var sensorId = request.body.sensorId;
    var year = request.body.year;
    var month = request.body.month;
    var day = request.body.day;
    var hour = request.body.hour;
    var minute = request.body.minute;
    var temperature = request.body.temperature;
    var humidity = request.body.humidity;

    if (sensorId == '1'){
      console.log("POST from Sensor【1】");
      fs.writeFile('text/SensorId_1.txt', sensorId + '\n' + year + '\n' + month + '\n' + day + '\n' + hour + '\n' + minute + '\n' + temperature + '\n' + humidity);
      response.end("Sensor【1】's POST OK !!");
    }
    else if(sensorId == '2'){
      console.log("POST from Sensor【2】");
      fs.writeFile('text/SensorId_2.txt', sensorId + '\n' + year + '\n' + month + '\n' + day + '\n' + hour + '\n' + minute + '\n' + temperature + '\n' + humidity);
      response.end("Sensor【2】's POST OK !!");
    }
    else if(sensorId == '3'){
      console.log("POST from Sensor【3】");
      fs.writeFile('text/SensorId_3.txt', sensorId + '\n' + year + '\n' + month + '\n' + day + '\n' + hour + '\n' + minute + '\n' + temperature + '\n' + humidity);
      response.end("Sensor【3】's POST OK !!");
    }
    else{
      console.log("Sensor Unknown...");
      response.end("Who are you ?");
    }

    //DBへの保存を以下に書いていく．．．

    // // 新規登録
    // if (result.length == 0){
    //     var user = new User();
    //
    //     user.username = username;
    //     user.password = password;
    //
    //     user.save(function(err){
    //     if (err) console.log(err);
    //     response.send("new_created");
    //     });
    // }
    // // usernameがDBに存在した場合
    // else{
    //     if (result[0].password == password)
    //     response.send("true");
    //     else
    //     response.send("false");
    // }
});

module.exports = router;
