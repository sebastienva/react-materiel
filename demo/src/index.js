import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';

import App from './App';
import Home from './Home/Home';
import InputDemo from './InputDemo/InputDemo';
import SelectDemo from './SelectDemo/SelectDemo';
import AutocompleteDemo from './AutocompleteDemo/AutocompleteDemo';
import PreloaderDemo from './PreloaderDemo/PreloaderDemo';
import SwitchDemo from './SwitchDemo/SwitchDemo';

render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={App}>
      <Route path="/home" component={Home} />
      <Route path="/input" component={InputDemo} />
      <Route path="/select" component={SelectDemo} />
      <Route path="/autocomplete" component={AutocompleteDemo} />
      <Route path="/preloader" component={PreloaderDemo} />
      <Route path="/switch" component={SwitchDemo} />

    </Route>
  </Router>
), document.getElementById('root'));
