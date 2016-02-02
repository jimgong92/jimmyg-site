import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import '../styles/css/main.css';

const store = configureStore();

// Enable hot reloading of styles
if(module.hot) {
  module.hot.accept('../styles/css/main.css', function() {
    require('../styles/css/main.css');
  });
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
