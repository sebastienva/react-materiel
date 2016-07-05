// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';

import Option from '../Option';

class Select extends Component {

  props: {
    value: any,
    multiple: boolean,
    onChange: () => void,
    children: any,
    label: string
  };

  state: {
    active: boolean
  };

  constructor(props: Object) {
    super(props);

    this.state = {
      active: false,
    };
  }

  handleFocus() {
    document.body.classList.add('modal-open');
    this.setState({ active: true });
  }

  handleClickOutside() {
    this.setState({ active: false });
    document.body.classList.remove('modal-open');
  }

  optionSelected(val) {
    let currentVal = this.props.value;

    if (this.props.multiple) {
      const index: number = currentVal.indexOf(val);

      if (index === -1) {
        currentVal.push(val);
      } else {
        currentVal.splice(index, 1);
      }
    } else {
      this.setState({ active: false });
      currentVal = val;
    }

    // trigger change
    this.props.onChange(currentVal);
  }

  isValueSelected(val) {
    if (this.props.multiple) {
      return this.props.value.indexOf(val) !== -1;
    } else {
      return this.props.value === val;
    }
  }

  addOption(element, options, preview) {
    const optionActive = this.isValueSelected(element.props.value);

    if (optionActive) {
      preview.push(element.props.children);
    }

    options.push(
      <Option
        onSelect={this.optionSelected.bind(this, element.props.value)}
        key={options.length} active={optionActive} multiple={this.props.multiple}
      >
        {element.props.children}
      </Option>
    );
  }

  render() {
    // classes
    const dropDownClasses: string = classNames({
      'select-dropdown': true,
      active: this.state.active,
    });
    const dropDownContentClasses: string = classNames({
      'dropdown-content select-dropdown multiple-select-dropdown': true,
      active: this.state.active,
    });
    const labelClasses: string = classNames({
      active: this.props.multiple ? this.props.value.length : this.props.value != null,
      'label-field': true,
    });

    // options + preview
    const preview = [];
    let options = [];

    React.Children.map(this.props.children, (child) => {
      if (child.type === 'optgroup') {
        options.push(<li className="optgroup" key={options.length}><span>{child.props.label}</span></li>);
        React.Children.map(child.props.children, (subChild) => {
          this.addOption(subChild, options, preview);
        });
      } else {
        this.addOption(child, options, preview);
      }
    });

    // final render
    return (
      <div className="select-wrapper" onFocus={this.handleFocus.bind(this)}>
        <span className="caret"><i className="material-icons">play_arrow</i></span>
        <label className={labelClasses}>{this.props.label}</label>
        <input type="text" className={dropDownClasses} readOnly value={preview.join(', ')} />
        <ul className={dropDownContentClasses}>
          {options}
        </ul>
      </div>
    );
  }
}

export default onClickOutside(Select);
