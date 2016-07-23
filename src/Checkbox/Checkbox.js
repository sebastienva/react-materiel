// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import Ink from 'react-ink';

type Props = {
  /** Callback fired when the switch is checked/unchecked */
  onChange: (value: ?boolean) => void,
  /** Tells if the switch is checked */
  checked: boolean,
  /** Label of the checkbox */
  label: string,
  /** Disabled if true */
  disabled: boolean,
  /** Filled appearence if true */
  filled: boolean,
}

/**
  The checkbox component is used like a normal react checkbox.
*/
class Checkbox extends Component {

  static defaultProps = {
    label: '',
    disabled: false,
    filled: false,
  };

  props: Props;

  handleChange = () => {
    if (this.props.onChange) {
      this.props.onChange(!this.props.checked);
    }
  }

  render() {
    const checkboxClasses = classNames({
      'filled-in': this.props.filled,
    });

    return (
      <span onClick={this.handleChange} style={{position: 'relative'}}>
        <input type="checkbox" className={checkboxClasses} checked={this.props.checked} onChange={() => {}} />
        <label>{this.props.label} <Ink style={{ width: '50px', height: '50px', top: '-15px', left: '-15px' }} background={false} /></label>
      </span>
    );
  }
}

export default Checkbox;
