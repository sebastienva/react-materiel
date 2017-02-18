// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  /** Label of the tab */
  label: string,
  /** Tab active */
  active: ?boolean,
  /** Event call when the tab is clicked */
  onClick: ?() => void,
  /** Tab number */
  index: ?number
}

/**
 * Tab
 */
class Tab extends Component {
  props: Props;

  handleClick = () => {
    this.props.onClick(this.props.index);
  }

  render() {
    const { label, active, onClick, ...other } = this.props;

    const tabClasses = classNames({
      'mdl-tabs__tab': true,
      'is-active': active,
    });

    return (
      <a href="#" className={tabClasses} onClick={this.handleClick} {...other}>{label}</a>
    );
  }
}

export default Tab;
