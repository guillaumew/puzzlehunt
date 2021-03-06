var http = require('http');
var express = require('express');

require("twig");

var app = express();
var server =  http.Server(app);

app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('./index.twig', {});
});

app.get('/:pagename', function (req, res) {
    res.render('./' + req.params.pagename + '.twig', {});
});


server.listen(process.env.PORT || 5000);
