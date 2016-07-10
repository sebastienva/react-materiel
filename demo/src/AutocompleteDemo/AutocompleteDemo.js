// @flow
import React, { Component } from 'react';
import { Autocomplete } from '../../../src';

class AutocompleteDemo extends Component {

  state: {
    auto: string,
    options: Array<Object>,
    isLoading: boolean
  };

  handleSearch: () => void;
  handleAuto: () => void;

  constructor(props: any) {
    super(props);

    this.state = {
      auto: '',
      options: [],
      isLoading: false,
    };

    this.handleAuto = this.handleAuto.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAuto(value: string) {
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
    return (
      <div>
        <h3>Autocomplete</h3>
        <div className="row">
          <div className="input-field col s6">
            <Autocomplete
              value={this.state.auto} label="Autocomplete"
              isLoading={this.state.isLoading}
              onChange={this.handleAuto}
              onSearch={this.handleSearch}
              strict
            >
              {this.state.options.map(option =>
                (<option key={option.id} value={option.id} preview={option.full_name}>
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
