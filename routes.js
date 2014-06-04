var path = require('path');
module.exports = {

  init: function(app) {
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


  }
};
