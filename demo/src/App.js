import React, { Component } from 'react';
import { Link } from 'react-router';
import Ink from 'react-ink';

if (process.browser) {
  require('../../scss/main.scss');
}

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
    let path = this.props.location.pathname.replace('/', '');
    path = path.charAt(0).toUpperCase() + path.slice(1);

    return (
      <div className="mdl-layout__container">
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header has-drawer is-upgraded">
        <div className="mdl-layout__drawer">
          <nav className="mdl-navigation">
            {App.COMPONENTS.map((component) =>
              <Link key={component.toLowerCase()} to={component.toLowerCase()} className="mdl-navigation__link" activeClassName="is-active">
              <Ink />{component}
              </Link>
            )}
          </nav>
        </div>
        <main className="mdl-layout__content">
            {this.props.children}
        </main>
        <div className="mdl-layout__obfuscator"></div>
      </div>
      </div>
    );
  }
}
