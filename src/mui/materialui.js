import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

// Tailored Components
import MuiButton from './muiButton/muiBtn';
// M-UI components
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Tabs, Tab} from 'material-ui/Tabs';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';


export default class Materialui extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
    };
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

        <Tabs>
          <Tab label="Buttons">
            <MuiButton></MuiButton>
          </Tab>
          <Tab label="Component Two">
            <div>
              <h2 style={styles.headline}>Component Two</h2>
              <p>
                This is an example tab.
              </p>
            </div>
          </Tab>
          <Tab label="Component Three">
            <div>
              <h2 style={styles.headline}>Component Three</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
