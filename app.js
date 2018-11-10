var path = require('path');

var express = require('express');
// var bodyparser = require('body-parser');

var app = express();

//config

var port = process.env.port || 80;
var application_root = './'

// define static directory
app.use('/static', express.static('static'));

// app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.sendFile('index.htm', {root: './'})
});

app.listen(port, () => {
    console.log('Express app listening on port '+port);
});