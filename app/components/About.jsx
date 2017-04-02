var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a simple application, built on React, that fetches the weather
        for the location entered.
      </p>
      <p>Here are some tools I used:</p>
      <ul>
        <li>
          <a href="http://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
