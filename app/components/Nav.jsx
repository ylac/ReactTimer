var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <IndexLink to="/" activeClassname="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassname="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://github.com/ylac" target="_blank">Caly Yang</a>
          </li>
        </ul>
      </div>
    </div>
  )
};

module.exports = Nav;
