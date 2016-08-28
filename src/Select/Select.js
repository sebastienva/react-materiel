// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';

import Input from '../Input/Input';
import Option from '../Option/Option';

type Props = {
  /** Value of the select field */
  value: ?any,
  /** Specifies that multiple options can be selected at once */
  multiple: boolean,
  /** Event call when the value is changed */
  onChange: ?() => void,
  /** `option` elements */
  children: any,
  /** Label of the field */
  label: string,
  /** Disable ink animation */
  noInk: boolean,
  /** Force a specific tabIndex */
  tabIndex: string,
}

type State = {
  active: boolean,
  hideAnimation: boolean,
  menuHeight: number,
  menuWidth: number,
};

/**
  This component works like a [standard select](http://www.w3schools.com/tags/tag_select.asp).
  You should be able to use to a similar  way.
  Todo : hidden input ?
*/
export class Select extends Component {

  static defaultProps = {
    multiple: false,
    noInk: false,
    tabIndex: '1',
  };

  props: Props;
  state: State;
  menu: Node;
  preview: Node;

  handleOptionSelected: () => void;

  constructor(props: Object) {
    super(props);

    this.state = {
      active: false,
      hideAnimation: false,
      menuHeight: 0,
      menuWidth: 0,
    };
  }

  componentDidMount() {
    this.setState({
      menuHeight: this.menu.offsetHeight,
      menuWidth: this.preview.offsetWidth,
    });
  }

  handleFocus = () => {
    document.body.classList.add('modal-open'); // "lock" the screen
    this.setState({ active: true });
  }

  handleKeyDown = (e: any) => {
    if (e.keyCode === 9) { // simulate lose of focus when tab is pressed
      this.handleClickOutside();
    }
  }

  handleClickOutside = () => {
    if (this.state.active) {
      this.setState({ active: false });
      document.body.classList.remove('modal-open');  // "unlock" the screen
    }
  }

  handleOptionSelected = (val: number | string) => {
    let currentVal = this.props.value;

    if (this.props.multiple && currentVal) {
      const index: number = currentVal.indexOf(val);

      if (index === -1) {
        currentVal.push(val);
      } else {
        currentVal.splice(index, 1);
      }
    } else {
      this.hideDropdown();
      document.body.classList.remove('modal-open');  // "unlock" the screen
      currentVal = val;
    }
    // trigger change
    if (this.props.onChange) {
      this.props.onChange(currentVal);
    }
  }

  hideDropdown() {
    // disable dropdown after "hide" animation
    this.setState({ hideAnimation: true });
    setTimeout(() => {
      this.setState({ active: false, hideAnimation: false });
    }, 200);
  }

  isValueSelected(val: any): boolean {
    let res: boolean;
    if (this.props.multiple && this.props.value) {
      res = this.props.value.indexOf(val) !== -1;
    } else {
      res = this.props.value === val;
    }
    return res;
  }

  addOption(element: any, options : any, preview: any) {
    const optionActive = this.isValueSelected(element.props.value);

    if (optionActive) {
      if (element.props.preview) {
        preview.push(element.props.preview);
      } else {
        preview.push(element.props.children);
      }
    }

    options.push(
      <Option
        onSelect={this.handleOptionSelected}
        key={options.length}
        value={element.props.value}
        active={optionActive}
        multiple={this.props.multiple}
        noInk={this.props.noInk}
      >
        {element.props.children}
      </Option>
    );
  }

  render() {
    // classes
    const isValue: boolean = (this.props.multiple && this.props.value) ? this.props.value.length : this.props.value != null;

    const wrapperClasses: string = classNames({
      'mdl-menu__container': true,
      'is-visible': this.state.active,
    });

    const previewClasses: string = classNames({
      'mdl-textfield': true,
      'mdl-textfield--floating-label': true,
      'is-dirty': isValue,
      'is-focused': this.state.active,
    });

    // options + preview
    const preview = [];
    let options = [];

    React.Children.map(this.props.children, (child) => {
      if (child.type === 'optgroup') {
        options.push(<li className="mdl-menu__group" key={options.length}><span>{child.props.label}</span></li>);
        React.Children.map(child.props.children, (subChild) => {
          this.addOption(subChild, options, preview);
        });
      } else {
        this.addOption(child, options, preview);
      }
    });

    // final render
    return (
      <div onClick={this.handleFocus}>
        <div className={wrapperClasses}>
          <div
            className="mdl-menu__outline mdl-menu__outline-standard"
            style={{ width: this.state.menuWidth, height: this.state.menuHeight }}
          ></div>
          <ul
            className="mdl-menu"
            style={{ clip: 'auto', width: this.state.menuWidth }}
            ref={(ref) => { this.menu = ref; }}
          >
          {options}
          </ul>
        </div>
        <div className={previewClasses} style={{ cursor: 'pointer' }} ref={(ref) => { this.preview = ref; }}>
          <i className="material-icons" style={{ float: 'right' }}>arrow_drop_down</i>
          <span className="mdl-textfield__input mdl-menu__preview">
            {preview.map((item) =>
              <span key={item}>{item}</span>
            )}
            &nbsp;
          </span>
          <label className="mdl-textfield__label">{this.props.label}</label>
        </div>
      </div>
    );
  }
}

export default onClickOutside(Select);
