import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import Nav from './nav';
import Home from './home';
import Bootstrap from './bootstrap/bootstrap';
import Materialui from './mui/materialui';
// import MuiButton from './mui/muiButton/muiBtn';
// import MuiButtonPreview from './mui/muiButton/MuiBtnPreview';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="/bootstrap" component={Bootstrap} />
          <Route path="/materialui" component={Materialui} />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
