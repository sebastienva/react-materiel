// @flow
import React, { Component } from 'react';
import { Autocomplete } from '../../../src';

class AutocompleteDemo extends Component {

  static STATES = `Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,
      Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,
      Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,
      Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,
      North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,
      South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,
      Wisconsin, Wyoming`;

  state: {
    auto: ?string,
    options: Array<Object>,
    isLoading: boolean,
    states: Array<string>,
    state: string,
  };

  constructor(props: any) {
    super(props);

    this.state = {
      auto: null,
      state: 'Alaska',
      options: [],
      isLoading: false,
      states: AutocompleteDemo.STATES.split(', '),
    };
  }

  handleAuto = (value: string) => {
    this.setState({ auto: value });
  }

  handleSearch = (value: string) => {
    this.setState({ isLoading: true });
    fetch(`https://api.github.com/search/repositories?q=${value}`).then(res => res.json()).then(data => {
      let options = [];
      if (data.items) {
        options = data.items;
      }
      this.setState({ options, isLoading: false });
    });
  }

  handleSearchState = (value: string) => {
    const states = AutocompleteDemo.STATES.split(', ').filter((state) =>
      state.toLowerCase().indexOf(value.toLowerCase()) === 0
    );

    this.setState({ states });
  }

  handleState = (value: string) => {
    this.setState({ state: value });
  }

  render() {
    return (
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">
            <Autocomplete
              label="Autocomplete"
              value={this.state.auto}
              isLoading={this.state.isLoading}
              onChange={this.handleAuto}
              onSearch={this.handleSearch}
            >
              {this.state.options.map(option =>
                (<option key={option.id} value={option.id} preview={option.full_name}>

                  <strong>{option.full_name}</strong><br />
                  <small>{option.description}</small>
                </option>)
              )}
            </Autocomplete>
          </div>
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">
            <Autocomplete
              label="State"
              value={this.state.state}
              onChange={this.handleState}
              onSearch={this.handleSearchState}
              debounce={0}
            >
              {this.state.states.map(state =>
                (<option key={state} value={state}>{state}</option>)
              )}
            </Autocomplete>
          </div>
        </div>
      </div>
    );
  }
}

export default AutocompleteDemo;
