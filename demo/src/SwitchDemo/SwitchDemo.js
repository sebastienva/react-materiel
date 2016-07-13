// @flow
import React, { Component } from 'react';

import { Switch } from '../../../src';

class SwitchDemo extends Component {

  state: {
    value1: boolean,
    value2: boolean,
    value3: boolean,
  };

  constructor(props: any) {
    super(props);

    this.state = {
      value1: false,
      value2: true,
      value3: true,
    };
  }

  handleValue1 = (value: ?boolean) => {
    this.setState({ value1: value });
  };

  handleValue2 = (value: ?boolean) => {
    this.setState({ value2: value });
  }

  handleValue3 = (value: boolean) => {
    this.setState({ value3: value });
  }

  render() {
    return (
      <div>
        <Switch labelOn="Test On" labelOff="Test off" onChange={this.handleValue1} checked={this.state.value1} />
        <Switch onChange={this.handleValue2} checked={this.state.value2} />
      </div>

    );
  }
}

export default SwitchDemo;
