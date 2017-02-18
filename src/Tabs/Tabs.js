// @flow
import React, { Component } from 'react';

type State = {
  activeTab: number,
};

/**
 * Tabs
 */
class Tabs extends Component {

  state: State;

  constructor(props: Object) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  onTabClick = (tabIndex: number) => {
    this.setState({ activeTab: tabIndex });
  }

  render() {
    const tabs = [];
    let tabContent = '';

    this.props.children.forEach((tab, key) => {
      tabs.push(React.cloneElement(tab, {
        index: key,
        active: this.state.activeTab === key,
        onClick: this.onTabClick,
        children: null,
      }));

      if (this.state.activeTab === key) {
        tabContent = tab.props.children;
      }
    });

    return (
      <div>
        <div className="mdl-tabs mdl-js-tabs is-upgraded">
          <div className="mdl-tabs__tab-bar">
            {tabs}
          </div>
        </div>
        <div className="rm-tabs__content">
          {tabContent}
        </div>
      </div>
    );
  }
}

export default Tabs;
