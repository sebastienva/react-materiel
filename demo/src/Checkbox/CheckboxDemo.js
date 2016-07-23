// @flow
import React, { Component } from 'react';

import { Checkbox } from '../../../src';

class CheckboxDemo extends Component {

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

  handleValue1 = (value: boolean) => {
    this.setState({ value1: value });
  };

  handleValue2 = (value: boolean) => {
    this.setState({ value2: value });
  }

  handleValue3 = (value: boolean) => {
    this.setState({ value3: value });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s4">
            <Checkbox label="Checkbox 1" onChange={this.handleValue1} checked={this.state.value1} />
          </div>
          <div className="col s4">
            <Checkbox label="Checkbox 2" onChange={this.handleValue2} checked={this.state.value2} />
          </div>

          <div className="col s4">
            <Checkbox label="Checkbox 3" filled onChange={this.handleValue3} checked={this.state.value3} />
          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxDemo;
