// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  /** Single color */
  singleColor: boolean,
}

/**
  todo
*/
class CircularPreloader extends Component {

  static defaultProps = {
    singleColor: false,
  };

  props: Props;

  render() {
    let spinners = [];
    for (let i = 1; i <= 4; i++) {
      spinners.push(
        <div className={`mdl-spinner__layer mdl-spinner__layer-${i}`}>
          <div className="mdl-spinner__circle-clipper mdl-spinner__left">
            <div className="mdl-spinner__circle"></div>
          </div>
          <div className="mdl-spinner__gap-patch">
            <div className="mdl-spinner__circle"></div>
          </div>
          <div className="mdl-spinner__circle-clipper mdl-spinner__right">
            <div className="mdl-spinner__circle"></div>
          </div>
        </div>
      );
    }

    let spinnerClasses = classNames({
      'mdl-spinner': true,
      'mdl-spinner--single-color': this.props.singleColor,
      'is-active': true,
      'is-upgraded': true,
    });

    return (
      <div className={spinnerClasses}>
        {spinners}
      </div>
    );
  }
}

export default CircularPreloader;
