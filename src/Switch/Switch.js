// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
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
  Similar to a [standard checkbox](http://www.w3schools.com/tags/att_input_checked.asp).
*/
class Switch extends Component {

  static defaultProps = {
    value: true,
    labelOff: 'On',
    labelOn: 'Off',
  };

  props: Props;

  handleChange = (e: any) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.checked, e);
    }
  }

  render() {
    const switchClasses = classNames({
      'mdl-switch': true,
      'is-upgraded': true,
      'is-checked': this.props.checked,
    });

    return (
      <div>
        <label className={switchClasses} >
          <input type="checkbox" id="switch-1" className="mdl-switch__input" checked={this.props.checked} onChange={this.handleChange}/>
          <span className="mdl-switch__label"></span>
          <div className="mdl-switch__track"></div>
          <div className="mdl-switch__thumb">
            <span className="mdl-switch__focus-helper"></span>
          </div>
        </label>
      </div>
    );
  }
}

export default Switch;
