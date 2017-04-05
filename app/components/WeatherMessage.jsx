var React = require('react');

var WeatherMessage = ({temp, unit, location}) => {
  return (
    <h3 className="text-center">It is {temp} {unit} in {location}.</h3>
  );
};

module.exports = WeatherMessage;
