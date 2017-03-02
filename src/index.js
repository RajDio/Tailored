import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Import Components
import App from './app';


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
