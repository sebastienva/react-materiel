// @flow
import React, { Component } from 'react';
import { Autocomplete } from '../../../src';

class AutocompleteDemo extends Component {

  state: {
    auto: any,
    options: Array<Object>,
    isLoading: boolean
  };

  constructor(props: any) {
    super(props);

    this.state = {
      auto: null,
      options: [],
      isLoading: false,
    };
  }

  handleAuto(value: number[]) {
    this.setState({ auto: value });
  }

  handleSearch(value: string) {
    this.setState({ isLoading: true });
    fetch(`https://api.github.com/search/repositories?q=${value}`).then(res => res.json()).then(data => {
      let options = [];
      if (data.items) {
        options = data.items;
      }
      this.setState({ options, isLoading: false });
    });
  }

  render() {
    // final render
    return (
      <div>

        <div className="row">
          <div className="input-field col s6">
            <Autocomplete
              value={this.state.auto} label="Autocomplete"
              isLoading={this.state.isLoading}
              onChange={this.handleAuto.bind(this)}
              onSearch={this.handleSearch.bind(this)}
              strict
            >
              {this.state.options.map(option =>
                (<option key={option.id} short={option.full_name}>
                  <img src={option.owner.avatar_url} alt="" />
                  <strong>{option.full_name}</strong><br />
                  <small>{option.description}</small>
                </option>)
              )}
            </Autocomplete>
          </div>
        </div>

      </div>
    );
  }
}

export default AutocompleteDemo;
