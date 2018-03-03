import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from './containers/Main';

import store from './redux/store';

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="routes-container">
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>);
