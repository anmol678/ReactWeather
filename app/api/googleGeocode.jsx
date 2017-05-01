var axios = require('axios');

const GOOGLE_GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';

module.exports = {
  getLoc: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestLongLat = `${GOOGLE_GEOCODE_URL}&address=${encodedLocation}`
    var loc = {};

    return axios.get(requestLongLat).then(function (res) {
      if (res.data.status === 'OK') {
        // loc = res.data.results[0].geometry.location;
        // return loc;
        return res.data.results[0];
      } else {
        throw new Error('Unable to fetch location');
      }
    }, function (err) {
      throw new Error('Unable to fetch weather');
    });
  }
}
