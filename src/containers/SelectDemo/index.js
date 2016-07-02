// @flow
import React, { Component } from 'react';

import { Select } from '../../components';

class SelectDemo extends Component {

  constructor() {
    super();

    this.state = {
      select1: null,
      select2: [],
      select3: null,
      select4: [],
    };
  }

  state: {
    select1: ?number,
    select2: Array<number>,
    select3: ?number,
    select4: Array<number>,
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

  render() {
    // final render
    return (
      <div>

        <div className="row">
          <div className="input-field col s6">
            <Select value={this.state.select1} label="Select simple" onChange={this.handleSelect1.bind(this)}>
              <option value={1}>Test 1</option>
              <option value={2}>Test 2</option>
              <option value={3}>Test 3</option>
              <option value={4}>Test 4</option>
            </Select>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <Select value={this.state.select2} multiple label="Select multiple" onChange={this.handleSelect2.bind(this)}>
              <option value={1}>Test 1</option>
              <option value={2}>Test 2</option>
              <option value={3}>Test 3</option>
              <option value={4}>Test 4</option>
            </Select>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <Select value={this.state.select3} label="Select simple + groups" onChange={this.handleSelect3.bind(this)}>
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

        <div className="row">
          <div className="input-field col s6">
            <Select value={this.state.select4} label="Select multiple + groups" multiple onChange={this.handleSelect4.bind(this)}>
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

      </div>
    );
  }
}

export default SelectDemo;
