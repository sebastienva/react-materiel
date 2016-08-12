// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  active: boolean,
  children: any,
  width: string | number,
  onItemClick?: () => void,
};

export class DropdownContent extends Component {

  props: Props;

  static defaultProps = {
    active: false,
    width: 'auto',
  };

  render() {
    const dropDownClasses: string = classNames({
      'dropdown-content': true,
      active: this.props.active,
    });

    // final render
    return (
      <ul className={dropDownClasses} style={{ width: this.props.width }}>
        {this.props.children}
      </ul>
    );
  }
}

export default DropdownContent;
