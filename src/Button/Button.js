// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

import Ink from 'react-ink';

type Props = {
  /** Button content */
  children?: Node,
  /** Disable ink effect */
  noInk: boolean,
  /** Material type of button */
  type: 'raised' | 'flat' | 'floating',
  /** Button color */
  color?: 'colored' | 'accent',
  /** Disable the button */
  disabled: boolean,
  /** React class, allow to customize the button */
  className: string,
  /** Callback fired when the button is clicked */
  onClick?: (e: any) => void,
}

/**
  todo
*/
class Button extends Component {

  static defaultProps = {
    type: 'raised',
    noInk: false,
    large: false,
    disabled: false,
    className: '',
  };

  props: Props;

  render() {
    const buttonClasses: string = classNames({
      'mdl-button': true,
      'mdl-button--raised': this.props.type === 'raised',
      'mdl-button--fab mdl-button--mini-fab': this.props.type === 'floating',
      'mdl-button--colored': this.props.color === 'colored',
      'mdl-button--accent': this.props.color === 'accent',
    });

    let ink = '';
    if (!this.props.noInk) {
      ink = <Ink />;
    }

    return (
      <button className={`${this.props.className} ${buttonClasses}`} disabled={this.props.disabled} onClick={this.props.onClick}>
        {this.props.children}{ink}
      </button>
    );
  }
}

export default Button;
