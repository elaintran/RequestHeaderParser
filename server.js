var express = require('express');
var app = express();

//express server & serve HTML file
app.get("/", function(req, res) {
    res.sendFile( __dirname + "/views/index.html");
});

//access public/css folder
app.use(express.static('public'));

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('App listening on port 3000!')
});