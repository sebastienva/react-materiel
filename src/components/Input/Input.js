// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

class Input extends Component {

  static defaultProps = {
    float: false,
    error: '',
    value: '',
  };

  props: {
    error: string,
    value: any,
    label: string,
    float: boolean,
    onChange: () => void
  };

  state: {
    active: boolean
  };

  input: any;

  constructor(props: Object) {
    super(props);

    this.state = {
      active: (this.props.value !== ''),
    };
  }

  handleFocus() {
    this.setState({ active: true });
  }

  handleBlur() {
    // keep label active if there an error, the error is :after it
    if (this.props.value === '' && this.props.error === '') {
      this.setState({
        active: false,
      });
    }
  }

  handleChange(e: any) {
    if (this.props.onChange) this.props.onChange(e.target.value);
  }

  handleClick() {
    this.input.focus();
    // focus event not triggered by tests (and possibly some browsers ?)
    this.handleFocus();
  }

  render() {
    const labelClasses = classNames({ active: this.state.active, 'label-field': true });
    const inputClasses = classNames({ 'validate invalid': this.props.error !== '' });
    let label = '';
    let placeholder = '';
    if (this.props.float) {
      label = <label data-error={this.props.error} className={labelClasses}>{this.props.label}</label>;
    } else {
      placeholder = this.props.label;
    }

    return (
      <span onClick={this.handleClick.bind(this)}>
        <input
          value={this.props.value} disabled={this.props.disabled}
          className={inputClasses} placeholder={placeholder}
          onChange={this.handleChange.bind(this)}
          onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} ref={(ref) => this.input = ref}
        />
        {label}
      </span>
    );
  }
}

export default Input;
