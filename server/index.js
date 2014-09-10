var express = require('express')
  , path = require('path')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , mongoose = require('mongoose')
  , controller = require('./message.controller')
  , cookieParser = require('cookie-parser');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
mongoose.connect('mongodb://localhost/alihm');

//Router
app.use(express.static(path.join(__dirname, '..' ,'public')));
app.use(express.static(path.join(__dirname, '..' ,'bower_components')));
app.use(favicon(path.join(__dirname, '..','public','images','favicon.png')));
app.get('/view/message', controller.index);
app.post('/message', controller.create);
app.get('*', function(req, res, next){
  res.status(404).sendFile(path.join(__dirname, '..' ,'public', '404.html'));
});

if (app.get('env') === 'production') {
  module.exports = app;
} else {
  app.set('port', process.env.PORT || 3000);
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
}