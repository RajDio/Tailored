import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

// import Nav from './nav';
import Home from './home';
import Bootstrap from './bootstrap';
import Materialui from './materialui';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/bootstrap" component={Bootstrap} />
        <Route path="/materialui" component={Materialui} />
      </Router>
    );
  }
}

export default App;
