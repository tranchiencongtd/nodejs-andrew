const forecast = require('../../../ulties/forecast');
var geolocation = require('geolocation');

class SiteController {
  // [GET] '/'
  index(req, res) {
    geolocation.getCurrentPosition(function (err, position) {
      if (err) throw err;
      console.log(position);
    });
    res.render('pages/index');
  }
}

module.exports = new SiteController();
