import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

export default class Bootstrap extends React.Component {
  constructor(props) {
    super(props);
  }

  options() {
    const styles = {};
    return (
      <div style={styles}>
        options
      </div>
    );
  }

  preview() {
    const styles = {};
    return (
      <div style={styles}>
        preview
      </div>
    );
  }

  code() {
    const styles = {};
    return (
      <div style={styles}>
        code
      </div>
    );
  }

  render() {
    return (
      <div>
        <Link to="/">Home</ Link>
        <h2>Bootstrap</h2>
        {this.options()}
        {this.preview()}
        {this.code()}
      </div>
    );
  }
}
