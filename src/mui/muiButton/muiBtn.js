import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

// Tailored Components
import MuiButtonPreview from './MuiBtnPreview'

// M-UI components
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

export default class MuiButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      type: ''
    };
  }

  // Mui Button Properties:
    // backgroundColor, str
    // disabled, bool
    // hoverColor, str
    // href, str
    // icon, node
    // label, str
    // labelPosition, 'before' || 'after'
    // labelStyle, obj
    // rippleColor, str
    // style, obj
    // if themed, primary and secondary, bool

  setButton(chosen) {
    this.setState({
      'type': chosen
    });
  }

  hover() {
    const hoverStyle = {
      backgroundColor: '#867BCD',
      fontFamily: 'Impact',
      color: '#FFF'
    }
  }

  renderOptions() {
    const optionsStyle = {
      backgroundColor: '#FAFFFD',
      margin: '5em',
      height: '35em',
      width: '30em',
      padding: '1em',
      textAlign: 'center',
      borderRadius: '5px 5px 7px 7px'
    };
    const typeStyle = {
      color: '#876BCD',
      fontSize: '0.75em',
      hoverColor: '#FFF'
    }
    return (
      <Paper style={optionsStyle} zDepth={1}>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Material-UI Button" />
          </ToolbarGroup>
        </Toolbar>

        <Toolbar style={{backgroundColor: 'transparent', cursor: 'pointer'}}>
          <ToolbarGroup>
            <ToolbarTitle
              text="Flat Button"
              style={typeStyle}
              onClick={this.setButton.bind(this, 'flat')}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle
              text="Raised Button"
              style={typeStyle}
              onClick={this.setButton.bind(this, 'raised')}/>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle
              text="Floating Action Button"
              style={typeStyle}
              onClick={this.setButton.bind(this, 'float')}/>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle
              text="Icon Button"
              style={typeStyle}
              onClick={this.setButton.bind(this, 'icon')}/>
          </ToolbarGroup>
        </Toolbar>
      </Paper>
    );
  }

  render() {
    const pageStyle = {
      display: 'flex',
      // flexwrap: 'wrap'
      backgroundColor: '#FAFFFD'
    };
    const previewStyle = {
      // backgroundColor: '#FAFFFD',
      margin: '5em',
      height: '10em',
      width: '15em',
      padding: '1em',
      paddingTop: '3em',
      textAlign: 'center',
      borderTop: '3px solid #867BCD',
      // borderLeft: '3px solid #867BCD',
      // borderRight: '3px solid #00BCD4',
      // borderBottom: '3px solid #00BCD4',
      borderRadius: '5px 5px 7px 7px'
    };
    return (
      <div style={pageStyle}>
        {this.renderOptions()}
        <Paper style={previewStyle} zDepth={1}>
          <MuiButtonPreview
            button={this.state}
          />
        </Paper>
      </div>
    );
  }
}
