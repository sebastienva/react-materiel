// @flow
import React, { Component } from 'react';

import { Select } from '../../components';

class SelectDemo extends Component {

  constructor() {
    super();

    this.state = {
      select1: [],
      select2: [],
      select3: [],
      select4: [],
    };
  }

  state: {
    select1: array<number>,
    select2: array<number>,
    select3: array<number>,
    select4: array<number>,
  };

  handleSelect1(value: number[]) {
    this.setState({ select1: value });
  }

  handleSelect2(value: number[]) {
    this.setState({ select2: value });
  }

  handleSelect3(value: number[]) {
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
            <Select value={this.state.select1} label="Select 1" onChange={this.handleSelect1.bind(this)}>
              <option value={1}>Test 1</option>
              <option value={2}>Test 2</option>
              <option value={3}>Test 3</option>
              <option value={4}>Test 4</option>
            </Select>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <Select value={this.state.select2} multiple label="Select 2" onChange={this.handleSelect2.bind(this)}>
              <option value={1}>Test 1</option>
              <option value={2}>Test 2</option>
              <option value={3}>Test 3</option>
              <option value={4}>Test 4</option>
            </Select>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <Select value={this.state.select3} label="Select 3" onChange={this.handleSelect3.bind(this)}>
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
            <Select value={this.state.select4} label="Select 4" multiple onChange={this.handleSelect4.bind(this)}>
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
