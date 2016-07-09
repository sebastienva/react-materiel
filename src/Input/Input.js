// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  error: string, // error message
  value: any,
  label: string,
  float: boolean,
  onChange: (arg1: string) => void,
  onKeyDown: ?() => void,
  disabled: boolean
}

type State = {
  active: boolean
}

class Input extends Component {

  static defaultProps = {
    float: false,
    error: '',
    value: '',
    disabled: false,
  };

  props: Props;
  state: State;
  input: any;

  handleBlur: () => void;
  handleFocus: () => void;
  handleChange: () => void;
  handleClick: () => void;

  constructor(props: Object) {
    super(props);

    this.state = {
      active: (this.props.value !== ''),
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleFocus() {
    this.setState({ active: true });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  handleBlur() {
    // keep label active if there an error, the error is :after it
    if (this.props.value === '' && this.props.error === '') {
      this.setState({
        active: false,
      });
    }

    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  handleChange(e: any) {
    if (this.props.onChange) { // this "if" statement reduce code coverage - todo : investigate
      this.props.onChange(e.target.value);
    }
  }

  handleClick() {
    this.input.focus();
    // focus event not triggered by tests (and possibly some browsers ?)
    this.handleFocus();
  }

  render() {
    const labelClasses = classNames({
      active: this.state.active || this.props.value,
      'label-field': true,
    });
    const inputClasses = classNames({
      'validate invalid': (this.props.error !== ''),
    });

    let label = '';
    let placeholder = '';
    if (this.props.float) {
      label = <label data-error={this.props.error} className={labelClasses}>{this.props.label}</label>;
    } else {
      placeholder = this.props.label;
    }

    return (
      <span onClick={this.handleClick}>
        <input
          value={this.props.value}
          disabled={this.props.disabled}
          className={inputClasses}
          placeholder={placeholder}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onKeyDown={this.props.onKeyDown}
          ref={(ref) => { this.input = ref; }}
        />
        {label}
      </span>
    );
  }
}

export default Input;
