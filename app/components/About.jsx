var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a simple application, built on React, that fetches the weather
        for the location entered.
      </p>
      <p>Here are some tools I used:</p>
      <ul>
        <li>
          <a href="http://facebook.github.io/react">React</a> - Front-end framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - API to fetch weather
        </li>
        <li>
          <a href="http://foundation.zurb.com">Foundation</a> - Front-end framework for styling
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
