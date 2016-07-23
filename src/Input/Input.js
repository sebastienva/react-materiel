// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  /** Error message related to the input field */
  error: ?string,
  /** Value of the input field */
  value: string,
  /** Label of the input field */
  label: string,
  /** Determine if the label is floating */
  float: boolean,
  /** Callback fired when input value change */
  onChange?: (arg1: string) => void,
  /** onFocus event  */
  onFocus?: (e: any) => void,
  /** onBlur event */
  onBlur?: (e: any) => void,
  /** Disable the input field */
  disabled: boolean,
  /** Enable character counter if defined */
  length?: number,
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

  handleFocus = (e: any) => {
    this.setState({ active: true });
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  handleBlur = (e: any) => {
    // keep label active if there an error, the error is :after it
    if (this.props.value === '' && this.props.error == null) {
      this.setState({
        active: false,
      });
    }

    if (this.props.onBlur) {
      this.props.onBlur(e);
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
    const {
      float,
      label,
      error,
      value,
      disabled,
      length,
      onChange, // eslint-disable-line no-unused-vars
      onFocus, // eslint-disable-line no-unused-vars
      onBlur, // eslint-disable-line no-unused-vars
      ...other,
    } = this.props;

    const labelClasses = classNames({
      active: this.state.active || value,
      'label-field': true,
    });
    const inputClasses = classNames({
      'validate invalid': (error != null),
    });

    let labelTag = '';
    let placeholder = '';
    if (float) {
      labelTag = <label data-error={error} className={labelClasses}>{label}</label>;
    } else {
      placeholder = label;
    }

    let characterCounter = '';
    if (length) {
      characterCounter = <span className="character-counter">{value.length} / {length}</span>;
    }

    return (
      <span onClick={this.handleClick}>
        <input
          value={value}
          disabled={disabled}
          className={inputClasses}
          placeholder={placeholder}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          ref={(ref) => { this.input = ref; }}
          {...other}
        />
        {labelTag}
        {characterCounter}
      </span>
    );
  }
}

export default Input;
