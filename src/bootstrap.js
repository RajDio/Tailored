import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

export default class Bootstrap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/">home</ Link>
        <h2>Bootstrap</h2>
      </div>
    );
  }
}
