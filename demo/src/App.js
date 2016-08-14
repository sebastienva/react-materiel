import React, { Component } from 'react';
import { Link } from 'react-router';
import Ink from 'react-ink';

import { Breadcrumb } from '../../src';

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
    let path = this.props.location.pathname;
    path = path.charAt(1).toUpperCase() + path.slice(2);

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
          <Breadcrumb>
            <span>Components</span>
            <span>{path}</span>
          </Breadcrumb>
        </header>
        <main>
          {this.props.children}
        </main>

        <footer className="page-footer">

          <div className="footer-copyright">
            <div className="container">
              Preview version
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
