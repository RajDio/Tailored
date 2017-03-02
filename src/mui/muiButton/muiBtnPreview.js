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
    let flatStyle = {
      backgroundColor: this.props.button.bgColor,
      color: this.props.button.fontColor
    };
    let raisedStyle = {
      backgroundColor: this.props.button.bgColor
    };
    let floatStyle = {
      fillColor: this.props.button.bgColor,
    };
    let iconStyle = {
      fillColor: this.props.button.bgColor,
    };
    if (this.props.button.type === 'flat') {
      return (
        <FlatButton label={this.props.button.label} style={flatStyle}/>
      );
    } else if (this.props.button.type === 'raised') {
      return (
        <RaisedButton label={this.props.button.label} buttonStyle={raisedStyle} labelColor={this.props.button.fontColor}/>
      );
    } else if (this.props.button.type === 'float') {
      return (
        <FloatingActionButton style={floatStyle}/>
      );
    } else if (this.props.button.type === 'icon') {
      return (
        <IconButton tooltip="IconButton" style={iconStyle}>
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
