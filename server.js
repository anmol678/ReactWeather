var express = require('express');
require('isomorphic-fetch');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] == 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    debugger;
    next();
  }
});

var url = 'https://api.darksky.net/forecast/46393541f12605b5942409970f50d087/';
app.get('/weather/:latLong/:units', function(req, res) {
  var latLong = req.params.latLong;
  var units = req.params.units;
  var link = '';

  if (units === '°F'){
    link = `${url}${latLong}?units=si`;
  }
  else {
    link = `${url}${latLong}?units=us`;

  }

  try {
    fetch(link).then(function(weather) {
        if (weather.status != 200) {
            res.status(weather.status).json({'message': 'Bad response from Dark Sky server'});
        }
        return weather.json();
      }).then(function(payload) {
          res.status(200).json(payload);
      });
  } catch(err) {
    console.log("Errors occurs requesting Dark Sky API", err);
    res.status(500).json({'message': 'Errors occurs requesting Dark Sky API', 'details' : err});
  }
});


app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
