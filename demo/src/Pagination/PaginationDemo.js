// @flow
import React, { Component } from 'react';

import { Pagination } from '../../../src';

type State = {
    page: number,
}

class PaginationDemo extends Component {

  state: State;

  constructor(props: Object) {
    super(props);

    this.state = {
      page: 1,
    };
  }

  handleChange = (page: number) => {
    this.setState({ page });
  }

  render() {
    return (
      <div>
        <Pagination totalPage={1} currentPage={this.state.page} onChange={this.handleChange} />
        <Pagination totalPage={5} currentPage={this.state.page} onChange={this.handleChange} />
        <Pagination totalPage={10} currentPage={this.state.page} onChange={this.handleChange} />
        <Pagination totalPage={20} currentPage={this.state.page} onChange={this.handleChange} />
      </div>
    );
  }
}

export default PaginationDemo;
