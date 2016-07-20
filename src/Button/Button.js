// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

import Ink from 'react-ink';

type Props = {
  /** Button content */
  children: Node,
  /** Disable ink effect */
  noInk: boolean,
  /** Material type of button */
  type: 'raised' | 'flat' | 'floating',
  /** Large button */
  large: boolean,
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
      btn: this.props.type === 'raised' && this.props.large === false,
      'btn-flat': this.props.type === 'flat',
      'btn-floating': this.props.type === 'floating',
      'btn-large': this.props.large || this.props.type === 'floating',
      disabled: this.props.disabled,
    });

    let ink = '';
    if (!this.props.noInk) {
      ink = <Ink />;
    }

    return (
      <span className={`${buttonClasses} ${this.props.className}`} onClick={this.props.onClick}>
        {this.props.children} {ink}
      </span>
    );
  }
}

export default Button;
