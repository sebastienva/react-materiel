// @flow
import React, { Component } from 'react';

type Props = {
  /** Chip content */
  children: Node,
  /** Callback on close */
  onClose: ?() => void,
};

/**
 wip
*/
class Chip extends Component {

  props: Props;

  handleCloseClick = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    let closeIcon = '';
    if (this.props.onClose) {
      closeIcon = (
        <span className="chip-close" onClick={this.handleCloseClick}>
          <svg fill="#000000" height="16" viewBox="0 0 20 20" width="16">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </span>
      );
    }

    return (
      <div className="chip">
        {this.props.children}
        {closeIcon}
      </div>

    );
  }
}

export default Chip;
