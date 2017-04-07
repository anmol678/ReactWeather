var React = require('react');

var GMap = React.createClass({
  componentDidMount: function () {
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDyTKhiz4WaHwd1JFhm_kalID7Z5MJmzlk&callback=initMap');
  },
  initMap: function () {
    var map = new google.maps.Map(this.refs.map, {
      center: {
        lat: parseFloat(this.props.lat),
        lng: parseFloat(this.props.lng)
      },
      zoom: 10
    });
  },
  render: function () {
    return (
      <div ref="map" style={{height:20 + "em"}}></div>
    );
  }
});

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}

module.exports = GMap;
