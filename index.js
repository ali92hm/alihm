var express = require('express')
  , routes = require('./routes')
  , path = require('path')
  , logger = require('morgan')
  , favicon = require('serve-favicon')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/imgs/favicon.ico'));
routes.init(app);
app.use(function(req, res) {
  res.status(404).render('404', { title: '404' });
});

if (process.env.NODE_ENV == 'production') {
  module.export = app;
} else {
  app.set('port', process.env.PORT || 3000);
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
}