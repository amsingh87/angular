var express = require('express');

var app = express();

//host static files
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/index', function (req, res) {
    res.redirect('/views/index.html');
});

app.get('/landing/person', function (req, res) {
    res.send('This is person from landing');
});

app.listen(3000, function (req, res) {
    console.log('Listening to the port 3000');
});