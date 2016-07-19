// @flow
import React, { Component } from 'react';
import Ink from 'react-ink';

type Props = {
  /** Callback fired when the switch is checked/unchecked */
  onChange: ?(value: ?boolean) => void,
  /** value (like a real checkbox this is not the real value but the "on" value) */
  value: any,
  /** Tells if the switch is checked */
  checked: ?boolean,
  /** Label for "on" value */
  label: ?string,
}

/**
  Similar to a [standard checkbox](http://www.w3schools.com/tags/att_input_checked.asp).
*/
class Checkbox extends Component {

  static defaultProps = {
    value: true,
    label: '',
  };

  props: Props;

  handleChange = (e: any) => {
    console.log('ok');
    if (this.props.onChange) {
      this.props.onChange(e.target.checked ? this.props.value : null);
    }
  }

  render() {
    return (
      <span>
        <input type="checkbox" checked={this.props.checked} onChange={this.handleChange} />
        <label>{this.props.label}</label>
      </span>
    );
  }
}

export default Checkbox;
