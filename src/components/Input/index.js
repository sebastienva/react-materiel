// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

class Input extends Component {

  static defaultProps = {
    float: false,
    error: '',
    value: '',
  };

  constructor(props: any) {
    super(props);

    this.state = {
      active: (this.props.value !== ''),
    };
  }

  state: {
    active: boolean
  };

  props: {
    error: string,
    value: any,
    label: string,
    float: boolean;
  };

  input: any;

  handleFocus() {
    this.setState({ active: true });
  }

  handleBlur() {
    // keep label active if there an error, the error is :after it
    if (this.props.value === '' && this.props.error === '') {
      this.setState({
        active: false
      });
    }
  }

  handleClick() {
    this.input.focus();
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
          className={inputClasses} placeholder={placeholder}
          onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} ref={(ref) => this.input = ref}
        />
        {label}
      </span>
    );
  }
}

export default Input;
