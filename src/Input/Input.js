// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  /** Error message related to the input field */
  error: ?string,
  /** Value of the input field */
  value: any,
  /** Label of the input field */
  label: string,
  /** Determine if the label is floating */
  float: boolean,
  /** Callback fired when input value change */
  onChange: ?(arg1: string) => void,
  /** Callback fired when a key is pressed */
  onKeyDown: ?() => void,
  /** Disable the input field */
  disabled: boolean
}

type State = {
  active: boolean
}

/**
  This component works like a (standard input)[http://www.w3schools.com/tags/tag_input.asp].
  Differences come from label/error.
*/
class Input extends Component {

  static defaultProps = {
    float: false,
    disabled: false,
    error: null,
  };

  props: Props;
  state: State;
  input: any;

  constructor(props: Object) {
    super(props);

    this.state = {
      active: (this.props.value !== ''),
    };
  }

  handleFocus = () => {
    this.setState({ active: true });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  handleBlur = () => {
    // keep label active if there an error, the error is :after it
    if (this.props.value === '' && this.props.error == null) {
      this.setState({
        active: false,
      });
    }

    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  handleChange = (e: any) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }

  handleClick = () => {
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
      'validate invalid': (this.props.error != null),
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
