import React, { Component } from 'react';
import { Link } from 'react-router';

import '../../scss/main.scss';

export default class App extends Component {

  render() {
    return (

      <div>
        <header>
          <ul id="nav-mobile" className="side-nav fixed" style={{ transform: 'translateX(0%)' }}>
            <li className="bold"><Link to="home" activeClassName="active">Home</Link></li>
            <li className="bold"><Link to="input" activeClassName="active">Input</Link></li>
            <li className="bold"><Link to="select" activeClassName="active">Select</Link></li>
            <li className="bold"><Link to="autocomplete" activeClassName="active">Autocomplete</Link></li>
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
