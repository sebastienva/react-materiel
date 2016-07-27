// @flow
import React, { Component } from 'react';
import classNames from 'classnames';


type Props = {
  /** Page number */
  page: number,
  /** Active page */
  active: boolean,
};


class PaginationPage extends Component {

  props: Props;

  handleClick = () => {
    this.props.onClick(this.props.page);
  }

  render() {
    const pageClasses = classNames({
      active: this.props.active,
    });

    return (
      <li onClick={this.handleClick} className={pageClasses}>{this.props.children}</li>
    );
  }
}

export default PaginationPage;
