var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Dev!');
});

app.listen(2000, function () {
  console.log('Dev Env listening on port 2000!');
});