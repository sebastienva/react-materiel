// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import Ink from 'react-ink';

import PaginationPage from './PaginationPage';

type Props = {
  /** Current page */
  currentPage: number,
  /** Number of pages */
  totalPage: number,
  /** Callback fired when the page is changed */
  onChange?: (page: number) => void,
};

/**
  Todo
*/
class Pagination extends Component {

  static defaultProps = {
  }

  props: Props;

  handlePageClick = (page: number) => {
    this.props.onChange(page);
  }

  handleNext = () => {
    const nextPage = this.props.currentPage + 1;
    if (nextPage <= this.props.totalPage) {
      this.props.onChange(nextPage);
    }
  }

  handlePrev = () => {
    const prevPage = this.props.currentPage - 1;
    if (prevPage >= 1) {
      this.props.onChange(prevPage);
    }
  }

  render() {
    const prevClasses = classNames({
      disabled: this.props.currentPage === 1,
    });
    const nextClasses = classNames({
      disabled: this.props.currentPage === this.props.totalPage,
    });

    const pages: Array<number> = [];

    if (this.props.totalPage > 5) {
      let i: number;
      // starting pages
      for (i = 1; i <= 2; i++) {
        pages.push(i);
      }

      // inner pages
      let minPages: number = this.props.currentPage - 1;
      if (minPages > this.props.totalPage - 4) {
        minPages = this.props.totalPage - 4;
      }
      let maxPages: number = this.props.currentPage + 1;
      if (maxPages > this.props.totalPage) {
        maxPages = this.props.totalPage;
      }
      for (i = minPages; i <= maxPages; i++) {
        if (pages[i - 1] || i <= 0) {
          pages.push(pages.length + 1);
        } else {
          pages.push(i);
        }
      }

      // ending pages
      for (i = this.props.totalPage - 1; i <= this.props.totalPage; i++) {
        if (pages.indexOf(i) === -1) {
          pages.push(i);
        }
      }
    } else {
      for (let i:number = 1; i <= this.props.totalPage; i++) {
        pages.push(i);
      }
    }

    // build pages react elements
    let prevNum: ?number = null;
    const pagesItems = [];
    pages.forEach((pageNum) => {
      if (prevNum + 1 !== pageNum) {
        pagesItems.push(<li key={pagesItems.length} className="filler">...</li>);
      }
      pagesItems.push(
        <PaginationPage
          key={pagesItems.length}
          page={pageNum}
          active={this.props.currentPage === pageNum}
          onClick={this.handlePageClick}
        ><a>{pageNum}<Ink /></a></PaginationPage>
      );
      // save page for comparaison
      prevNum = pageNum;
    });

    return (
      <ul className="pagination">
        <li className={prevClasses} onClick={this.handlePrev}>
          <a><i className="material-icons">chevron_left</i><Ink /></a>
        </li>
        {pagesItems}
        <li className={nextClasses} onClick={this.handleNext}>
          <a><i className="material-icons">chevron_right</i><Ink /></a>
        </li>
      </ul>
    );
  }
}
export default Pagination;
