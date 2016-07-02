// @flow
import React, { Component } from 'react';

import { Input } from '../../components';

class InputDemo extends Component {

  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: 'test',
    };
  }

  state: {
    firstName: string,
    lastName: string,
    email: string
  };

  handleFirstName(e: any) {
    this.setState({ firstName: e.target.value });
  }

  handleLastName(e: any) {
    this.setState({ lastName: e.target.value });
  }

  handleEmail(e: any) {
    this.setState({ email: e.target.value });
  }

  render() {
    // final render
    return (
      <div>
        <div className="row">
          <div className="input-field col s6">
            <Input value={this.state.firstName} float label="First name" onChange={this.handleFirstName.bind(this)} />
          </div>

          <div className="input-field col s6">
            <Input value={this.state.lastName} label="Last name" onChange={this.handleLastName.bind(this)} />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <Input value={this.state.email} float type="email" label="E-mail" error="error" onChange={this.handleEmail.bind(this)} />
          </div>
        </div>

      </div>
    );
  }
}

export default InputDemo;
