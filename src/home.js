import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Nav from './nav';
// import logo from 'mui/material-ui-logo';

export default class Home extends React.Component {

  render() {
    const styles = {
      title: {
        fontFamily: 'Roboto',
        textAlign: 'center',
        marginTop: '120px'
      },
      text: {
        textDecoration: 'none',
        textAlign: 'center',
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
      },
      colorStripe: {
        height: '380px',
        background: 'radial-gradient(circle farthest-corner at right bottom,#e9f0f2 0,#fcfeff 100%)'
      },
      whiteStripe: {
        height: '380px',
        marginTop: '30px'
      },
      rounded: {
        height: '80px',
        width: '80px',
        borderRadius: '40px'
      }
    };

    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="col-xs-12">
            <div style={styles.colorStripe}>
              <div className="col-xs-8 col-xs-offset-2">
                <h1 style={styles.title}>Tailored</h1>
                <h3 style={styles.text}>Start customizing your components below!</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div style={styles.whiteStripe}>
              <div className="col-xs-8 col-xs-offset-2">
                <h4 style={styles.text}>Select the framework you are using</h4>
                <div style={styles.buttons}>
                  <Link to="/bootstrap" style={styles.text}>
                    <div style={styles.square}>
                      <div style={styles.bootLogo}>
                        B
                      </div>
                    </div>
                  </Link>
                  <Link to="/materialui" style={styles.text}>
                    <div style={styles.square}>
                      <img src="http://www.material-ui.com/images/material-ui-logo.svg" style={styles.muiLogo} />
                    </div>
                  </Link>
                  <Link to="/materialui" style={styles.text}>
                    <div style={styles.square}>
                      <img src="" style={styles.muiLogo} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div style={styles.colorStripe}>
              <div className="col-xs-8 col-xs-offset-2">
                <h2 style={styles.title}>Help us build Tailored</h2>
                <img style={styles.rounded} src="http://fakeimg.pl/300/" />
                <img style={styles.rounded} src="http://fakeimg.pl/300/"/>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div style={styles.whiteStripe}>
              <div className="col-xs-8 col-xs-offset-2">
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
