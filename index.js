
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.use(express.favicon(__dirname + '/public/imgs/favicon.ico'));
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(function(req, res) {
    res.status(404).render('404', { title: '404' });
  });
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

routes.init(app);

if (process.env.NODE_ENV == 'production') {
  module.export = app;
} else {
    http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
  });
}



