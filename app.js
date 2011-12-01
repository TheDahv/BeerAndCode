
/**
 * Module dependencies.
 */

var express = require('express');
var people = require('./hardcoded_people').people;

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.favicon(__dirname + '/public/favicon.ico'));
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes
app.get('/robots.txt', function (res, res) {
  require('fs').readFile('robots.txt', function (err, data) {
    if (err) {
      res.writeHead(500, { type: 'text/plain' });
      res.end('Error loading robots file');
    } else {
      res.writeHead(200, { type: 'text/plain' });
      res.write(data);
      res.end();
    }
  });
});

app.get('/', function(req, res){
  res.render('index', {
    title: 'Seattle Beer && Code'
  });
});

app.get('/people', function (req, res) {
  res.render('people', {
    title: 'People',
    locals: { 
      people: people
    }
  });
});

app.get('/calendar', function (req, res) {
  res.render('calendar', {
    title: 'Calendar'
  });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
