// @flow
import React, { Component } from 'react';

type Props = {
  /** Size of the preloader */
  size: 'small' | 'medium' | 'big',
  /** Color of the preloader */
  color: 'red' | 'blue' | 'yellow' | 'green' | 'none',
}

/**
 Wip
*/
class CircularPreloader extends Component {

  static defaultProps = {
    size: 'medium',
    color: 'none',
  };

  props: Props;

  render() {
    return (
      <span>
        <div className={`preloader-wrapper active ${this.props.size}`}>
          <div className={`spinner-layer spinner-${this.props.color}-only`}>
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default CircularPreloader;
