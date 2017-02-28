import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      text: {
        color: '#867BCD'
      },
      buttons: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      button: {
        backgroundColor: '#FFF',
        margin: '40px 20px 0px',
        borderColor: '#867BCD',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        textDecoration: 'none',
        padding: '30px',
        borderTop: '5px solid #867BCD',
        borderRadius: '4px 4px 6px 6px',
        boxShadow: '0 0 1px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.08)',
        transition: 'all .6s ease-out'
      }
    };

    return (
      <div>
        <h2 style={styles.text}>Homejs</h2>
        <div style={styles.buttons}>
          <Link to="/bootstrap">
            <div style={styles.button}>
              Custom Bootstrap
            </div>
          </ Link>
          <Link to="/materialui">
            <div style={styles.button}>
              Custom MUI
            </div>
          </ Link>
        </div>
      </div>
    );
  }
}
