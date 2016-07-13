// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import Ink from 'react-ink';

type Props = {
  children: any,
  active: boolean,
  onSelect: (value: any, preview: any) => void,
  multiple: ?boolean,
  value: any,
  preview: ?string,
  noInk: ?boolean,
};

class Option extends Component {

  static defaultProps = {
    active: false,
    children: null,
    multiple: false,
    preview: '',
    value: null,
    noInk: false,
  }

  props: Props;

  handleSelect = () => {
    this.props.onSelect(this.props.value, (this.props.preview || this.props.children));
  }

  render() {
    const optionClasses: string = classNames({
      'active selected': this.props.active,
      'optgroup-option': true,
    });

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

    let ink = '';
    if (this.props.noInk) {
      ink = <Ink />;
    }

    return (
      <li onClick={this.handleSelect} className={optionClasses}>
        {option} {ink}
      </li>
    );
  }
}

export default Option;
