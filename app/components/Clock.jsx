var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function () {
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function (totalSeconds) {
    var secs = totalSeconds % 60;
    var mins = Math.floor(totalSeconds / 60);

    if (secs < 10) {
      secs = '0' + secs;
    }

    if (mins < 10) {
      mins = '0' + mins;
    }

    return mins + ':' + secs;
  },
  render: function () {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
