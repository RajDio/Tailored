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
import Divider from 'material-ui/Divider';

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
      backgroundColor: this.props.button.bgColor
    };
    const codeStyle = {
      display: 'flex',
      textAlign: 'center',
      overflow: 'auto',
      flexwrap: 'wrap'
    };
    if (this.props.button.type === 'flat') {
      let code = `
        <FlatButton
          label=${this.props.button.label}
          rippleColor=${this.props.button.fontColor}
          style=${JSON.stringify(flatStyle)}
        />
      `;
      return (
        <div>
          <FlatButton label={this.props.button.label} style={flatStyle} rippleColor={this.props.button.fontColor}/>
          <Divider style={{backgroundColor: '#C5DFF2'}}/>
          <Paper>
            <code style={codeStyle}>
              {code}
            </code>
          </Paper>
        </div>
      );
    } else if (this.props.button.type === 'raised') {
      let code = `
        <RaisedButton
          label=${this.props.button.label}
          labelColor=${this.props.button.fontColor}
          buttonStyle=${JSON.stringify(raisedStyle)}
        />
      `;
      return (
        <div>
          <RaisedButton label={this.props.button.label} buttonStyle={raisedStyle} labelColor={this.props.button.fontColor}/>
          <Divider style={{backgroundColor: '#C5DFF2'}}/>
          <div style={codeStyle}>
            {code}
          </div>
        </div>
      );
    } else if (this.props.button.type === 'float') {
      return (
        <FloatingActionButton backgroundColor={this.props.button.bgColor} style={floatStyle}/>
      );
    } else if (this.props.button.type === 'icon') {
      return (
        <IconButton tooltip="IconButton" style={iconStyle}>
          <ActionHome />
        </IconButton>
      );
    }
  }

  render() {
    const codeStyle = {};
    return (
      <div>
        {this.renderPreview()}
      </div>
    );
  }
}
