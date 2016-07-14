import React, { Component } from 'react';
import { Link } from 'react-router';
import Ink from 'react-ink';

import '../../scss/main.scss';

export default class App extends Component {

  render() {
    return (

      <div>
        <header>
          <ul id="nav-mobile" className="side-nav fixed" style={{ transform: 'translateX(0%)' }}>
            <li className="bold"><Link to="home" activeClassName="active"><Ink />Home</Link></li>
            <li className="bold"><Link to="input" activeClassName="active"><Ink />Input</Link></li>
            <li className="bold"><Link to="select" activeClassName="active"><Ink />Select</Link></li>
            <li className="bold"><Link to="autocomplete" activeClassName="active"><Ink />Autocomplete</Link></li>
            <li className="bold"><Link to="switch" activeClassName="active"><Ink />Switch</Link></li>
            <li className="bold"><Link to="chip" activeClassName="active"><Ink />Chip</Link></li>
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
