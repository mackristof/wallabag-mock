var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var entries = [];

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));


app.get('/api/u/:username/entries', function (req, res, next) {
	console.log(req.params.username);
	res.send(entries);
});

app.post('/api/u/:username/entries', function (req, res, next) {
	console.log(req.params.username);
	var entry = req.body;
	entries.push(entry);
	res.send(entries);
});

var server = app.listen(3000, function () {
	  var host = server.address().address;
	  var port = server.address().port;
	  console.log('Example app listening at http://%s:%s', host, port);
});

