import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';

import App from './App';
import Home from './containers/Home';
import InputDemo from './containers/InputDemo';
import SelectDemo from './containers/SelectDemo';

render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={App}>
      <Route path="/home" component={Home} />
      <Route path="/input" component={InputDemo} />
      <Route path="/select" component={SelectDemo} />
    </Route>
  </Router>
), document.getElementById('root'));
