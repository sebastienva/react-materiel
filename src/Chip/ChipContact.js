// @flow
import React, { Component } from 'react';

type Props = {
  /** Chip content */
  children: Node,
};

/**
  todo
*/
class ChipContact extends Component {

  props: Props;

  render() {
    return (
      <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">
        {this.props.children}
      </span>
    );
  }
}

export default ChipContact;
