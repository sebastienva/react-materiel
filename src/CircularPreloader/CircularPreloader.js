// @flow
import React, { Component } from 'react';

class CircularPreloader extends Component {

  render() {
    return (
      <div {...this.props}>
        <div className="preloader-wrapper active small">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CircularPreloader;
