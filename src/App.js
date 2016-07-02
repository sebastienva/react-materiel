import React, { Component } from 'react';
import { Link } from 'react-router';

import 'materialize-css/dist/css/materialize.css';

// global styles
import './App.css';

export default class App extends Component {

  render() {
    return (

      <div>
        <header>
          <ul id="nav-mobile" className="side-nav fixed" style={{ transform: 'translateX(0%)' }}>
            <li className="bold"><Link to="home" activeClassName="active">Home</Link></li>
            <li className="bold" activeClassName="active"><Link to="input">Input</Link></li>
            <li className="bold" activeClassName="active"><Link to="select">Select</Link></li>
          </ul>
        </header>
        <main>
          <div className="container">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}
