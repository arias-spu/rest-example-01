var express = require('express');
var app = express();
var fs = require("fs");

var student = {
   "student5" : {
      "name" : "Silvia",
      "major" : "Mkt",
      "id": "941066"
   }
}

app.post('/addStudent', function (req, res) {
   var filename = __dirname + "/" + "students.json";
   var jsonData;
   // First read existing users.
   fs.readFile(filename , 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["student5"] = student["student5"];
       jsonData = JSON.stringify(data);
       console.log( data );
       fs.writeFile(filename, jsonData, 'utf8', function(err, data){

       });
       res.end( jsonData);
   });
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})