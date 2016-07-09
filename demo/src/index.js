import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';

import App from './App';
import Home from './Home/Home';
import InputDemo from './InputDemo/InputDemo';
import SelectDemo from './SelectDemo/SelectDemo';
import AutocompleteDemo from './AutocompleteDemo/AutocompleteDemo';

render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={App}>
      <Route path="/home" component={Home} />
      <Route path="/input" component={InputDemo} />
      <Route path="/select" component={SelectDemo} />
      <Route path="/autocomplete" component={AutocompleteDemo} />
    </Route>
  </Router>
), document.getElementById('root'));
