// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  /** Chip content */
  children: Node,
  /** Callback on close */
  onClose: ?() => void,
};

/**
  todo
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
        <a href="#" onClick={this.handleCloseClick} className="mdl-chip__action"><i className="material-icons">cancel</i></a>
      );
    }

    let chipText = '';
    let chipContact = '';

    if (this.props.children instanceof Array) {
      chipText = this.props.children.slice(0);
      if (chipText[0].type.name === 'ChipContact') {
        chipContact = chipText.shift();
      }
    } else {
      chipText = this.props.children;
    }

    const chipClasses = classNames({
      'mdl-chip': true,
      'mdl-chip--contact': chipContact !== '',
    });

    return (
      <span className={chipClasses}>
        {chipContact}
        <span className="mdl-chip__text">{chipText}</span>
        {closeIcon}
      </span>
    );
  }
}

export default Chip;
