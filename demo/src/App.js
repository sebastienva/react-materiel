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
      menuActive: true,
    };
  }

  onMenuClick = () => {
    this.setState({ menuActive: !this.state.menuActive });
  }

  getPath() {
    const path = this.props.location.pathname.replace('/', '');
    return path.charAt(0).toUpperCase() + path.slice(1);
  }

  render() {
    const path = this.getPath();

    let menuClasses = classNames({
      'rm-menu': true,
      'is-active': this.state.menuActive,
    });

    return (
      <div>
        <div className="rm-header">
          <div className="rm-header__menu-links" onClick={this.onMenuClick}><span className="material-icons">menu</span></div>

          <Link to="/" className="rm-header__logo">
            <div className="rm-header__logo-caps">R</div>eact <div className="rm-header__logo-caps">m</div>ateriel
          </Link>
            {path !== '' &&
              <span className="rm-header__title"> <i className="material-icons">chevron_right</i> {path}</span>
            }
        </div>

        <div className={menuClasses}>
          <Link to="" className="rm-menu__link" activeClassName="is-active">
            <Ink />Home
          </Link>
          <div className="rm-menu__section">Components</div>
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
