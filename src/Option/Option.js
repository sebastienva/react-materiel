// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import Ink from 'react-ink';
import Checkbox from '../Checkbox/Checkbox';

type Props = {
  children: Node,
  active: boolean,
  onSelect: (value: any, preview: any) => void,
  multiple: ?boolean,
  value: any,
  preview: ?string,
  noInk: ?boolean,
};


/**
  For internal use.
*/
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
      'is-selected': this.props.active,
      'mdl-menu__item': true,
    });

    let option = '';

    if (this.props.multiple) {
      option = (
        <span>
          <Checkbox checked={this.props.active} />
          <label>{this.props.children}</label>
        </span>
      );
    } else {
      option = <span>{this.props.children}</span>;
    }

    let ink = '';
    if (!this.props.noInk) {
      ink = <Ink />;
    }

    return (
      <li onClick={this.handleSelect} className={optionClasses} tabIndex="1">
        {option}{ink}
      </li>
    );
  }
}

export default Option;
