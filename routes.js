var path = require('path');
module.exports = function(app) {

  app.get('/heartbeat', function(req, res) {
    res.send("it's alive! it's alive!!")
  });

  app.get( '/', function (req, res, next){
    res.render('index', {
      title: 'Ali Hajimirza'
    });
  });

  app.get('/old', function(req, res, next){
    res.sendfile(path.join(__dirname, 'public/html', 'index.html'));
  });

  app.use(function(req, res) {
    res.status(404).render('404', { title: '404' });
  });
};

