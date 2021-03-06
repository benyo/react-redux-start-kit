/**
 * Module dependecies
 */
import React from 'react';
import ReactDOM from 'react-dom';

// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';

import App from './App';

const mountNode = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    mountNode,
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}

