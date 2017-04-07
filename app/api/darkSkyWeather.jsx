var axios = require('axios');
var googleGeocode = require('googleGeocode');

const DARK_SKY_WEATHER_URL = 'https://api.darksky.net/forecast/46393541f12605b5942409970f50d087/';

module.exports = {
  getTemp: function (location, unit) {
    var requestWeather = '';
    return googleGeocode.getLoc(location).then(function (loc) {
      requestWeather = `/weather/${loc.lat},${loc.lng}/${unit}`;

      return axios.get(requestWeather).then(function (res) {
        if (res.data.code == 400) {
          throw new Error('Unable to fetch location');
        } else {
          return res.data.currently.temperature;
        }
      }, function (err) {
        throw new Error('Unable to fetch weather');
      });
    }, function (err) {
        throw new Error(err);
    });
  }
}
