// @flow
import React, { Component } from 'react';

import { Input } from '../../../src';

class InputDemo extends Component {

  state: {
    firstName: string,
    lastName: string,
    email: string,
    disable: string
  };

  constructor(props: any) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: 'test',
      disable: "I'm disabled",
    };
  }

  handleFirstName = (value: string) => {
    this.setState({ firstName: value });
  }

  handleLastName = (value: string) => {
    this.setState({ lastName: value });
  }

  handleEmail = (value: string) => {
    this.setState({ email: value });
  }

  handleDisable = (value: string) => {
    this.setState({ disable: value });
  }

  render() {
    return (
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">
            <Input value={this.state.firstName} float label="First name" onChange={this.handleFirstName} />
          </div>

          <div className="mdl-cell mdl-cell--6-col">
            <Input value={this.state.lastName} label="Last name" length={10} onChange={this.handleLastName} />
          </div>
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">
            <Input value={this.state.email} float type="email" label="E-mail" error="error" onChange={this.handleEmail} />
          </div>
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">
            <Input value={this.state.disable} float type="email" label="Disabled" disabled onChange={this.handleDisable} />
          </div>
        </div>
      </div>
    );
  }
}

export default InputDemo;
