var React = require('react');
var {IndexLink} = require('react-router');

var Nav = () => {
    return (
      <div className="top-bar">
          <ul className="menu">
            <li className="menu-text">checkTheWeather</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
            </li>
            <li>
              <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
            </li>
          </ul>
      </div>
    );
  };

module.exports = Nav;
