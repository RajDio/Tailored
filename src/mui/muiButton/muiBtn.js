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
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

export default class MuiButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'flat',
      label: 'label',
      bgColor: '#fff',
      fontColor: '#000'
    };
  }

  // Mui Button Properties:
    // hoverColor, str
    // icon, node
    // labelStyle, obj --> fonts??

  setButton(chosen) {
    this.setState({
      'type': chosen
    });
  }

  setColor(e, targ, val) {
    console.log('e:', e); // category
    console.log('val:', val); // value
    if (e === 'lbl') {
      this.setState({
        'label': `${val}`
      });
    } else if (e === 'btn') {
      this.setState({
        'bgColor': `#${val}`
      });
    } else if (e === 'font') {
      this.setState({
        'fontColor': `#${val}`
      });
    }
  }

  hover() {
    const hoverStyle = {
      backgroundColor: '#3e7ce0',
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
      color: '#3e7ce0',
      fontSize: '0.75em',
      hoverColor: '#FFF'
    };
    const floatingLabelStyle = {
      color: '#3e7ce0',
      borderColor: 'transparent'
    };
    // This will change according to inputted color choice
    let floatingLabelFocusStyle = {
      color: '#3e7ce0',
      borderColor: this.state.bgColor
    };
    const dividerStyle = {
      backgroundColor: '#C5DFF2'
    };
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

        <Toolbar style={{backgroundColor: 'transparent'}}>
          <ToolbarGroup>
            <TextField
              floatingLabelText="Choose a label for the button"
              style={typeStyle}
              floatingLabelStyle={floatingLabelStyle}
              underlineStyle={floatingLabelStyle}
              floatingLabelFocusStyle={floatingLabelFocusStyle}
              underlineFocusStyle={floatingLabelFocusStyle}
              onChange = {this.setColor.bind(this, 'lbl')}
              />
          </ToolbarGroup>
        </Toolbar>
        <Divider style={dividerStyle}/>
        <Toolbar style={{backgroundColor: 'transparent'}}>
          <ToolbarGroup>
            <TextField
              floatingLabelText="Choose a color for the button [#HEX]"
              style={typeStyle}
              floatingLabelStyle={floatingLabelStyle}
              underlineStyle={floatingLabelStyle}
              floatingLabelFocusStyle={floatingLabelFocusStyle}
              underlineFocusStyle={floatingLabelFocusStyle}
              onChange = {this.setColor.bind(this, 'btn')}
              />
          </ToolbarGroup>
        </Toolbar>
        <Divider style={dividerStyle}/>
        <Toolbar style={{backgroundColor: 'transparent'}}>
          <ToolbarGroup>
            <TextField
              floatingLabelText="Choose a color for the content [#HEX]"
              style={typeStyle}
              floatingLabelStyle={floatingLabelStyle}
              underlineStyle={floatingLabelStyle}
              floatingLabelFocusStyle={floatingLabelFocusStyle}
              underlineFocusStyle={floatingLabelFocusStyle}
              onChange = {this.setColor.bind(this, 'font')}
              />
          </ToolbarGroup>
        </Toolbar>
        <Divider style={dividerStyle}/>
      </Paper>
    );
  }

  render() {
    const pageStyle = {
      display: 'flex',
      flexwrap: 'wrap',
      backgroundColor: '#FAFFFD'
    };
    const previewStyle = {
      // backgroundColor: '#FAFFFD',
      // margin: '5em',
      marginTop: '5em',
      marginLeft: '10em',
      height: '15em',
      width: '20em',
      padding: '1em',
      paddingTop: '3em',
      textAlign: 'center',
      backgroundColor: 'transparent',
      display: 'flex',
      flexwrap: 'wrap'
    };
    return (
      <div style={pageStyle}>
        {this.renderOptions()}
        <Paper style={previewStyle} zDepth={0}>
          <MuiButtonPreview
            button={this.state}
          />
        </Paper>
      </div>
    );
  }
}
