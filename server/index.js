var express = require('express')
  , path = require('path')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , cookieParser = require('cookie-parser');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());


//Router
app.use(express.static(path.join(__dirname, '..' ,'public')));
app.use(express.static(path.join(__dirname, '..' ,'bower_components')));
app.use(favicon(path.join(__dirname, '..','public','images','favicon.png')));


if (app.get('env') === 'production') {
  var mongoose = require('mongoose');
  var controller = require('./message.controller');
  mongoose.connect('mongodb://localhost/alihm');
  app.get('/view/message', controller.index);
  app.post('/message', controller.create);
  module.exports = app;
} else {
  app.set('port', process.env.PORT || 3000);
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
}

app.get('*', function(req, res, next){
  res.status(404).sendFile(path.join(__dirname, '..' ,'public', '404.html'));
});