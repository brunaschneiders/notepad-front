import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Router from './routes';

import './styles/global.css';

export default () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
