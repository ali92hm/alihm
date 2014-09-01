var express = require('express')
  , path = require('path')
  , logger = require('morgan')
  , favicon = require('serve-favicon')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.get('/research', function(req, res, next){
  res.sendFile(path.join(__dirname, 'public', 'research.html'));
});
app.get('*', function(req, res, next){
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

if (app.get('env') === 'production') {
  module.exports = app;
} else {
  app.set('port', process.env.PORT || 3000);
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
}