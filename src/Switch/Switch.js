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
  labelOff: ?string,
  /** Label for "off" value */
  labelOn: ?string,
}

/**
  Switch component.
  This api simular to a checkbox.
*/
class Switch extends Component {

  static defaultProps = {
    value: true,
    labelOff: '',
    labelOn: '',
  };

  props: Props;

  handleChange = (e: any) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.checked ? this.props.value : null);
    }
  }

  render() {
    const inputProps = {};

    if (this.props.checked) {
      inputProps.defaultChecked = true;
    }

    return (
      <div className="switch" >
        <label>
          <span className="switch-on">{this.props.labelOff}</span>
          <input type="checkbox" defaultChecked={this.props.checked} onChange={this.handleChange} />
          <span className="lever"><Ink /></span>
          <span className="switch-off">{this.props.labelOn}</span>
        </label>
      </div>
    );
  }
}

export default Switch;
