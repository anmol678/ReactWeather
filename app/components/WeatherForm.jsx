var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;
    var unit = this.refs.toggle.outerText;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location, unit);
    }
  },
  render: function () {
    return (
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Enter location"/>
          <button className="hollow button one">Get Weather</button>
          <div className="switch large two">
            <input className="switch-input" type="checkbox" id="unit" ref="unitSwitch"/>
            <label className="switch-paddle" htmlFor="unit" ref="toggle">
              <span className="switch-active" aria-hidden="true">°C</span>
              <span className="switch-inactive" aria-hidden="true">°F</span>
            </label>
          </div>
        </form>
    );
  }
});

module.exports = WeatherForm;
