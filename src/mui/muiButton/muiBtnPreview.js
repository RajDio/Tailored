import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

// Tailored Components

// M-UI components
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

export default class MuiButtonPreview extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('props.button from muiBtn.js:', this.props.button);
  }

  renderPreview() {


    if (this.props.button.type === 'flat') {
      return (
        <FlatButton label="FlatButton"/>
      );
    } else if (this.props.button.type === 'raised') {
      return (
        <RaisedButton label="RaisedButton"/>
      );
    } else if (this.props.button.type === 'float') {
      return (
        <FloatingActionButton label="FloatingActionButton"/>
      );
    } else if (this.props.button.type === 'icon') {
      return (
        <IconButton tooltip="IconButton">
          <ActionHome />
        </IconButton>
      );
    }
  }

  // renderCode() {
  //   const codeStyle = {};
  //   return (
  //     <div style={codeStyle}>
  //       code
  //     </div>
  //   );
  // }

  render() {
    const codeStyle = {};
    return (
      <div>
        {this.renderPreview()}
      </div>
    );
  }
}
