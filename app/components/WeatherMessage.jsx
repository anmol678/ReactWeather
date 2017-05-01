var React = require('react');

var WeatherMessage = ({temp, unit, location}) => {
  return (
    <div>
      <h4 className="text-center">It is {temp}{unit} in {location}.</h4>
    </div>
  );
};

module.exports = WeatherMessage;
