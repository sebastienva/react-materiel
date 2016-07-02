// @flow
import React, { Component, PropTypes } from 'react';

class Option extends Component {

  static defaultProps = {
    active: false,
    children: null,
  }

  props: {
    children: any,
    active: boolean,
    onSelect: () => void,
    multiple: boolean
  };

  render() {
    let option = '';

    if (this.props.multiple) {
      option = (
        <span>
          <input type="checkbox" checked={this.props.active} readOnly />
          <label>{this.props.children}</label>
        </span>
      );
    } else {
      option = <span>{this.props.children}</span>;
    }

    return (
      <li onClick={this.props.onSelect} className="optgroup-option">
        {option}
      </li>
    );
  }
}

export default Option;
