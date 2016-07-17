// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  /** Progress percentage of the bar */
  progress: ?number
}

/**
  todo
*/
class LinearPreloader extends Component {

  props: Props;

  static defaultProps = {
    progress: null,
  }

  render() {
    const barClasses: string = classNames({
      determinate: this.props.progress !== null,
      indeterminate: this.props.progress === null,
    });

    const barStyles: Object = {};
    if (this.props.progress) {
      barStyles.width = `${this.props.progress.toString()}%`;
    }

    return (
      <span>
        <div className="progress">
          <div className={barClasses} style={barStyles}></div>
        </div>
      </span>
    );
  }
}

export default LinearPreloader;
