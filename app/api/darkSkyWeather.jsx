var axios = require('axios');

const DARK_SKY_WEATHER_URL = 'https://api.darksky.net/forecast/46393541f12605b5942409970f50d087/';
const GOOGLE_GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';

module.exports = {
  getTemp: function (location, unit) {
    var encodedLocation = encodeURIComponent(location);
    var requestLongLat = `${GOOGLE_GEOCODE_URL}&address=${encodedLocation}`
    var requestWeather = '';
    var loc = {};
    
    return axios.get(requestLongLat).then(function (res) {
      if (res.data.status === 'OK') {
        loc = res.data.results[0].geometry.location;
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

      } else {
        throw new Error('Unable to fetch location');
      }
    }, function (err) {
      throw new Error('Unable to fetch weather');
    });
  }
}
