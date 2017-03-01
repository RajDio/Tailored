import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
// import logo from 'mui/material-ui-logo';

export default class Home extends React.Component {

  render() {
    const styles = {
      text: {
        textDecoration: 'none'
      },
      buttons: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      square: {
        // backgroundColor: '#e8fcff',
        margin: '40px 20px 0px',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '30px',
        borderTop: '5px solid #00BCD4',
        borderRadius: '4px 4px 6px 6px',
        boxShadow: '0 0 1px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.08)',
        transition: 'all .6s ease-out',
        display: 'flex',
        flexWrap: 'wrap'
      },
      bootLogo: {
        fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
        border: '1px solid #6b15a1',
        color: '#6b15a1',
        backgroundColor: 'transparent',
        width: '1.33em',
        height: '1.33em',
        fontSize: '9em',
        display: 'block',
        fontWeight: '500',
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '15%',
      },
      muiLogo: {
        alignItems: 'center',
        height: '12em',
        width: '12em'
      }
    };

    return (
      <div>
        <h2 style={styles.text}>Welcome to Tailored!</h2>
        <h3 style={styles.text}>Start customizing your components below!</h3>
        <h4>Select the framework you are using</h4>
        <div style={styles.buttons}>
          <Link to="/bootstrap" style={styles.text}>
            <div style={styles.square}>
              <div style={styles.bootLogo}>
                B
              </div>
            </div>
          </ Link>
          <Link to="/materialui" style={styles.text}>
            <div style={styles.square}>
              <img
                src="http://www.material-ui.com/images/material-ui-logo.svg" style={styles.muiLogo}
              />
            </div>
          </ Link>
        </div>
      </div>
    );
  }
}
