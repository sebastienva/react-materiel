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
import ChipDemo from './ChipDemo/ChipDemo';
import ButtonDemo from './Button/ButtonDemo';
import CardDemo from './Card';
import ModalDemo from './Modal';
import CheckboxDemo from './Checkbox';
import PaginationDemo from './Pagination';
import DropdownDemo from './Dropdown';


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
      <Route path="/chip" component={ChipDemo} />
      <Route path="/button" component={ButtonDemo} />
      <Route path="/card" component={CardDemo} />
      <Route path="/modal" component={ModalDemo} />
      <Route path="/checkbox" component={CheckboxDemo} />
      <Route path="/pagination" component={PaginationDemo} />
      <Route path="/dropdown" component={DropdownDemo} />
    </Route>
  </Router>
), document.getElementById('root'));
