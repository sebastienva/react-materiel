// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  /** Progress percentage  */
  progress?: number,
  /** Buffer percentage */
  buffer?: number,
}

/**
  todo
*/
class LinearPreloader extends Component {

  props: Props;

  render() {
    const barClasses: string = classNames({
      'mdl-progress': true,
      'mdl-progress__indeterminate': this.props.progress === undefined,
    });

    const progressWidth: number = this.props.progress ? this.props.progress : 0;
    const bufferWidth: number = this.props.buffer ? (100 - this.props.buffer) : 100;
    const auxWidth: number = this.props.buffer ? this.props.buffer : 0;

    return (
      <div className={barClasses}>
        <div className="progressbar bar bar1" style={{ width: `${progressWidth.toString()}%` }}></div>
        <div className="bufferbar bar bar2" style={{ width: `${bufferWidth.toString()}%` }}></div>
        <div className="auxbar bar bar3" style={{ width: `${auxWidth.toString()}%` }}></div>
      </div>
    );
  }
}

export default LinearPreloader;
