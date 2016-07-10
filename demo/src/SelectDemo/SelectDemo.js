// @flow
import React, { Component } from 'react';

import { Select } from '../../../src';

class SelectDemo extends Component {

  constructor() {
    super();

    this.state = {
      select1: null,
      select2: [],
      select3: null,
      select4: [],
      select5: null,
    };
  }

  state: {
    select1: ?number,
    select2: Array<number>,
    select3: ?number,
    select4: Array<number>,
    select5: ?number,
  };

  handleSelect1(value: number) {
    this.setState({ select1: value });
  }

  handleSelect2(value: number[]) {
    this.setState({ select2: value });
  }

  handleSelect3(value: number) {
    this.setState({ select3: value });
  }

  handleSelect4(value: number[]) {
    this.setState({ select4: value });
  }

  handleSelect5(value: number) {
    this.setState({ select5: value });
  }

  render() {
    let options = [];
    for (let i = 0; i < 5; i++) {
      options.push(<option key={i} value={i}>Test {i}</option>);
    }

    let optionsHtml = [];
    for (let i = 0; i < 5; i++) {
      optionsHtml.push(<option key={i} value={i} preview={`Test ${i}`}>Test <h4>{i}</h4></option>);
    }

    return (
      <div>

        <h3>Simple</h3>
        <div className="row">
          <div className="input-field col s6">
            <Select value={this.state.select1} label="Select an option" onChange={this.handleSelect1.bind(this)}>
              {options}
            </Select>
          </div>
        </div>

        <h3>Multiple</h3>
        <div className="row">
          <div className="input-field col s6">
            <Select value={this.state.select2} multiple label="Select some options" onChange={this.handleSelect2.bind(this)}>
              {options}
            </Select>
          </div>
        </div>

        <h3>Group</h3>
        <div className="row">
          <div className="input-field col s6">
            <Select value={this.state.select3} label="Select an option" onChange={this.handleSelect3.bind(this)}>
              <optgroup label="Group 1">
                <option value={1}>Test 1</option>
                <option value={2}>Test 2</option>
              </optgroup>
              <optgroup label="Group 2">
                <option value={3}>Test 3</option>
                <option value={4}>Test 4</option>
              </optgroup>
            </Select>
          </div>
        </div>

        <h3>Group + Multiple</h3>
        <div className="row">
          <div className="input-field col s6">
            <Select value={this.state.select4} label="Select some options" multiple onChange={this.handleSelect4.bind(this)}>
              <optgroup label="Group 1">
                <option value={1}>Test 1</option>
                <option value={2}>Test 2</option>
              </optgroup>
              <optgroup label="Group 2">
                <option value={3}>Test 3</option>
                <option value={4}>Test 4</option>
              </optgroup>
            </Select>
          </div>
        </div>

        <h3>Templating</h3>
        <div className="row">
          <div className="input-field col s6">
            <Select value={this.state.select5} label="Select an option" onChange={this.handleSelect5.bind(this)}>
              {optionsHtml}
            </Select>
          </div>
        </div>

      </div>
    );
  }
}

export default SelectDemo;
