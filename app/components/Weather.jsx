var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var darkSkyWeather = require('darkSkyWeather');
var googleGeocode = require('googleGeocode');
var GMap = require('Map');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
    }
  },
  handleSearch: function (location, unit) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
      lat: undefined,
      lng: undefined
    });

    googleGeocode.getLoc(location).then(function (latLng) {
      console.log(latLng);

      darkSkyWeather.getTemp(latLng, unit).then(function (temp) {
        var u = '';
        if (unit === '°F') {
          u = '°C';
        }
        else {
          u = '°F';
        }

        that.setState({
          location: location,
          temp: temp,
          isLoading: false,
          unit: u,
          lat: latLng.lat,
          lng: latLng.lng
        });
      });
    }).catch(function (err) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, temp, location, errorMessage, unit, lat, lng} = this.state;

    function renderMessage() {
      if (isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return (
          <div>
            <WeatherMessage temp={temp} location={location} unit={unit}/>
            <GMap lat={lat} lng={lng}/>
          </div>
        );
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return <ErrorModal message={errorMessage}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        <div className="three">
          {renderMessage()}
        </div>
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
