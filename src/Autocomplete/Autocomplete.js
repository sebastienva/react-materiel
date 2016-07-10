// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';

import Option from '../Option/Option';
import Input from '../Input/Input';
import CircularPreloader from '../CircularPreloader/CircularPreloader';

type Props = {
  children: any,
  isLoading: boolean,
  label: string,
  strict: boolean,
  onSearch: () => void,
};

type State = {
  active: boolean,
  search: string,
  value: any,
}

class Autocomplete extends Component {

  static defaultProps = {
    strict: false,
  };

  props: Props;
  state: State;
  timeout: any;

  handleSearch: () => void;
  handleKeyDown: () => void;
  handleFocus: () => void;

  constructor(props: Object) {
    super(props);

    this.state = {
      active: false,
      search: '',
      value: null,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleOptionSelected = this.handleOptionSelected.bind(this);
  }

  handleSearch(value: string) {
    this.setState({ search: value });

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.props.onSearch(value);
    }, 300);
  }

  handleKeyDown(e: any) {
    // clear value on backspace
    if (e.keyCode === 8 && this.state.value !== null) {
      this.clearValue();
    }
  }

  handleFocus() {
    document.body.classList.add('modal-open'); // "lock" the screen
    this.setState({ active: true });
  }

  handleClickOutside() {
    this.setState({ active: false });
    document.body.classList.remove('modal-open');  // "unlock" the screen
  }

  handleOptionSelected(value: any, text: string) {
    this.setState({ value, search: text });
    this.handleClickOutside();
  }

  clearValue() {
    this.setState({ value: null, search: '' });
    this.props.onSearch('');
  }

  render() {
    const dropDownContentClasses: string = classNames({
      'dropdown-content select-dropdown multiple-select-dropdown': true,
      active: this.state.active && this.state.value === null,
    });

    let closeIcon = '';
    if (this.state.value !== null) {
      closeIcon = (<div className="close" onClick={this.clearValue.bind(this)}>
        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>);
    }

    let loading = '';
    if (this.props.isLoading) {
      loading = <CircularPreloader className="loader" />;
    }

    let options = React.Children.map(this.props.children, (child) =>
      <Option
        key={child.key || options.length}
        value={child.props.value}
        onSelect={this.handleOptionSelected}
        preview={child.props.preview}
      >
        {child.props.children}
      </Option>
    );

    // final render
    return (
      <div className="select-wrapper autocomplete">
        <Input
          label={this.props.label}
          value={this.state.search}
          float
          onChange={this.handleSearch}
          onFocus={this.handleFocus}
          onKeyDown={this.handleKeyDown}
        />
        {loading} {closeIcon}
        <ul className={dropDownContentClasses}>
          {options}
        </ul>
      </div>
    );
  }
}

export default onClickOutside(Autocomplete);
