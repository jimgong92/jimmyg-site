import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import '../styles/less/main.less';

const store = configureStore();

// Enable hot reloading of styles
if(module.hot) {
  module.hot.accept('../styles/less/main.less', function() {
    require('../styles/less/main.less');
  });
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
