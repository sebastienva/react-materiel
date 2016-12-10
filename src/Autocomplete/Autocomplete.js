// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';

import AutocompleteOption from './AutocompleteOption';
import Input from '../Input/Input';

import LinearPreloader from '../LinearPreloader/LinearPreloader';

type Props = {
  /** `option` elements */
  children: Node,
  /** Display a loading throbber */
  isLoading: boolean,
  /** Label text of the field */
  label: string,
  /** Callback fired when a search is requested. This callback is already debounced to limit request */
  onSearch: (value: string) => void,
  /** Callback fired when an option is selected */
  onChange?: (value: any) => void,
  /** Debounce search */
  debounce: number,
  /** Value of the autocomplete field */
  value: ?any,
}

type State = {
  active: boolean,
  search: string,
}

/**
  This component is similar to a [Select](https://github.com/sebastienva/materialize-me/tree/master/src/Select)
  but with a "search" function.
*/
class Autocomplete extends Component {

  static defaultProps = {
    isLoading: false,
    value: null,
    debounce: 300,
  };

  props: Props;
  state: State;
  timeout: any;
  input: any;

  constructor(props: Object) {
    super(props);

    this.state = {
      active: false,
      search: '',
    };
  }

  handleSearch = (value: string) => {
    this.setState({ search: value });

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.props.onSearch(value);
    }, this.props.debounce);
  }

  handleKeyDown = (e: any) => {
    // clear value on backspace
    if (e.keyCode === 8 && this.props.value !== null) {
      this.clearValue();
    }
  }

  handleFocus = () => {
    document.body.classList.add('modal-open'); // "lock" the screen
    this.setState({ active: true });
  }

  handleOptionSelected = (value: any, text: string) => {
    this.setState({ search: text });
    this.handleClickOutside();
  }

  handleClickOutside() {
    this.setState({ active: false });
    document.body.classList.remove('modal-open');  // "unlock" the screen
  }

  clearValue() {
    this.setState({ search: '' });
    this.props.onChange(null, null);
    this.props.onSearch('');
  }

  render() {
    const dropDownContentClasses: string = classNames({
      'mdl-autocomplete__dropdown': true,
      active: this.state.active,
    });

    let closeIcon = '';
    if (this.props.value !== null) {
      closeIcon = (<div className="close" onClick={this.clearValue.bind(this)}>
        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>);
    }

    let loader = '';
    if (this.props.isLoading) {
      loader = <span className="mdl-autocomplete__loader"><LinearPreloader /></span>;
    }

    let options = React.Children.map(this.props.children, (child) =>
      <AutocompleteOption
        key={child.key || options.length}
        value={child.props.value}
        onSelect={this.handleOptionSelected}
        preview={child.props.preview}
      >
        {child.props.children}
      </AutocompleteOption>
    );

    // final render
    return (
      <div className="mdl-autocomplete__container">
        <Input
          label={this.props.label}
          value={this.state.search}
          float
          onChange={this.handleSearch}
          onFocus={this.handleFocus}
          onKeyDown={this.handleKeyDown}
          ref={(ref) => { this.input = ref; }}
        />
        <ul className={dropDownContentClasses}>
          {options}
        </ul>
        {loader}
      </div>
    );
  }
}

export default onClickOutside(Autocomplete);
