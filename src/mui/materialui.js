import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

// M-UI components
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';

export default class Materialui extends React.Component {
  constructor(props) {
    super(props);
  }

    options() {
      const styles = {};
      return (
        <Paper style={styles} zDepth={1}>
          options
        />
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
          <Toolbar>
            <ToolbarGroup>
              <Link to="/"><ToolbarTitle text="HOME" /></ Link>
              <ToolbarSeparator />
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarTitle text="Material UI" />
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarSeparator />
            </ToolbarGroup>
          </Toolbar>

          {this.options()}
          {this.preview()}
          {this.code()}
        </div>
      );
    }
  }
