// @flow
import React, { Component } from 'react';

type Props = {
  children: any,
}


/**
  Todo
*/
class Breadcrumb extends Component {

  props: Props;

  render() {
    const items = this.props.children.map((item, i) =>
      React.cloneElement(item, { key: i, className: 'breadcrumb' })
    );

    return (
      <nav>
        <div className="nav-wrapper">
          <div className="col s12">
            {items}
          </div>
        </div>
      </nav>
    );
  }
}

export default Breadcrumb;
