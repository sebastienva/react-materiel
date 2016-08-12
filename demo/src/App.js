import React, { Component } from 'react';
import { Link } from 'react-router';
import Ink from 'react-ink';

import '../../scss/main.scss';

export default class App extends Component {

  static COMPONENTS = [
    'Home',
    'Input',
    'Select',
    'Autocomplete',
    'Switch',
    'Chip',
    'Preloader',
    'Button',
    'Card',
    'Modal',
    'Checkbox',
    'Pagination',
    'Dropdown',
  ];

  render() {
    return (
      <div>
        <header>
          <ul id="nav-mobile" className="side-nav fixed" style={{ transform: 'translateX(0%)' }}>
            {App.COMPONENTS.map((component) =>
              <li key={component} className="bold"><Link to={component.toLowerCase()} activeClassName="active">
                <Ink />{component}</Link>
              </li>
            )}
          </ul>
        </header>
        <main>
          <div className="container">
            {this.props.children}
          </div>
          <div className="footer">

          </div>
        </main>
      </div>
    );
  }
}
