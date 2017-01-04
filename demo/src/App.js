import React, { Component } from 'react';
import { Link } from 'react-router';
import Ink from 'react-ink';
import classNames from 'classnames';

if (process.browser) {
  require('../../scss/main.scss');
}

export default class App extends Component {

  static COMPONENTS = [
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

  constructor(props: any) {
    super(props);

    this.state = {
      active: false,
    };
  }

  onMenuClick = () => {
    this.setState({ active: !this.state.active });
  }

  render() {
    let path = this.props.location.pathname.replace('/', '');
    path = path.charAt(0).toUpperCase() + path.slice(1);

    let menuClasses = classNames({
      'rm-menu': true,
      'is-active': this.state.active,
    });

    return (
      <div>
        <div className="rm-header">
          <div className="rm-header__menu-links" onClick={this.onMenuClick}><span className="material-icons">menu</span></div>
          <div className="rm-header__logo">R</div>eact <div className="rm-header__logo">m</div>ateriel
        </div>

        <div className={menuClasses}>
          {App.COMPONENTS.map((component) =>
            <Link key={component.toLowerCase()} to={component.toLowerCase()} className="rm-menu__link" activeClassName="is-active">
              <Ink />{component}
            </Link>
          )}
        </div>

        <main className="rm-content">
            {this.props.children}
        </main>
      </div>
    );
  }
}
