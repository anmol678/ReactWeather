var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a couple examples to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Los%20Angeles'>Los Angeles</Link>
        </li>
        <li>
          <Link to='/?location=Paris'>Paris</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
