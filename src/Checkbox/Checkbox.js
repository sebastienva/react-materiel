// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import Ink from 'react-ink';

type Props = {
  /** Callback fired when the switch is checked/unchecked */
  onChange?: (value: ?boolean) => void,
  /** Tells if the switch is checked */
  checked: boolean,
  /** Label of the checkbox */
  label: string,
  /** Disabled if true */
  disabled: boolean,
  /** Filled appearence if true */
  filled: boolean,
  /** Disable ink effect if true */
  noInk: boolean,
}

/**
  The checkbox component is used like a normal react checkbox.
*/
class Checkbox extends Component {

  static defaultProps = {
    label: '',
    disabled: false,
    filled: false,
    noInk: false,
    checked: false,
  };

  props: Props;

  handleChange = (e: any) => {
    if (this.props.onChange) {
      this.props.onChange(!this.props.checked, e);
    }
  }

  render() {
    const checkboxClasses = classNames({
      'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded': true,
      'is-checked': this.props.checked,
    });

    let ink = '';
    if (!this.props.noInk) {
      ink = <Ink style={{ width: '50px', height: '50px', top: '-15px', left: '-15px' }} background={false} />;
    }

    return (
      <label className={checkboxClasses} style={{ position: 'relative', 'width': 'auto' }}>
        <input type="checkbox" className="mdl-checkbox__input" checked={this.props.checked} onChange={this.handleChange} />
        <span className="mdl-checkbox__label">{this.props.label}</span>
        <span className="mdl-checkbox__focus-helper"></span>
        <span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline"></span></span>
      </label>
    );
  }
}

export default Checkbox;
