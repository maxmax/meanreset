var fs = require('fs');
var pg = require('pg');
var cool = require('cool-ascii-faces');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var base = require('./views/base/base.js');

//var COMMENTS_FILE = path.join(__dirname, '/views/date/comments.json');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
//end request

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});

app.get('/', function(request, response) {
  response.render('pages/index');
  //json test
  //console.log(COMMENTS_FILE);
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.get('/times', function(request, response) {
  var result = ''
  var times = process.env.TIMES || 5
  for (i=0; i < times; i++)
    result += i + ' ';
  response.send(result);
});

//app.get('/app', function(request, response) {
//  response.render('app/index');
//});

app.use('/base', base);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
