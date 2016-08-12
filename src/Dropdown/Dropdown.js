// @flow
import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

type Props = {
  children: any,
}

type State = {
  active: boolean,
  maxWidth: number,
};

export class Dropdown extends Component {

  props: Props;
  state: State;

  label: Node;

  handleOptionSelected: () => void;

  constructor(props: Object) {
    super(props);

    this.state = {
      active: false,
      maxWidth: 0,
    };
  }

  handleClick = () => {
    this.setState({ active: true });
  }

  handleClickOutside = () => {
    this.setState({ active: false });
  }

  componentDidMount = () => {
    this.setState({ maxWidth: this.label.offsetWidth });
  }

  render() {
    const label = this.props.children[0];
    const menu = React.cloneElement(this.props.children[1], { active: this.state.active, width: this.state.maxWidth });

    return (
      <div style={{ position: 'relative' }} onClick={this.handleClick}>
        <span ref={(label) => this.label = label}>
          {label}
        </span>
        {menu}
      </div>
    );
  }
}

export default onClickOutside(Dropdown);
