var express = require('express');
//var bodyParser = require('body-parser');
//var cors = require('cors');
var app = express();

app.get("/api/whoami", function (req, res) {
	var ip_address = req.ip;
	var language = req.get('Accept-Language');
	var software = req.get('User-Agent');
	res.json({"ipaddress": ip_address, "language": language, "software": software});
});

//express server & serve HTML file
app.get("/", function(req, res) {
    res.sendFile( __dirname + "/views/index.html");
});

//access public/css folder
app.use(express.static('public'));

//port for heroku
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('App listening on port 3000!')
});