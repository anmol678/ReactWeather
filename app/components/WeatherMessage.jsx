var React = require('react');

var WeatherMessage = ({temp, unit, location}) => {
  return (
    <div>
      <h3 className="text-center">It is {temp} {unit} in {location}.</h3>
    </div>
  );
};

module.exports = WeatherMessage;
