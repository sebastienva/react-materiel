// @flow
import React, { Component } from 'react';

type Props = {
  children: any,
};

export class DropdownItem extends Component {

  props: Props;

  render() {
    return (
      <li {...this.props}><span>{this.props.children}</span></li>
    );
  }
}

export default DropdownItem;
