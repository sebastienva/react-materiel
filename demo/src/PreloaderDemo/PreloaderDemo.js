// @flow
import React from 'react';
import { CircularPreloader, LinearPreloader } from '../../../src';

const PreloaderDemo = () =>
  (<div>
    <h4>Circular</h4>
    <div className="row">
      <div className="col s2">
        <CircularPreloader size="big" color="red" />
      </div>
      <div className="col s2">
        <CircularPreloader size="medium" color="yellow" />
      </div>
      <div className="col s2">
        <CircularPreloader size="medium" color="none" />
      </div>
      <div className="col s2">
        <CircularPreloader size="medium" color="blue" />
      </div>
      <div className="col s2">
        <CircularPreloader size="small" color="green" />
      </div>
    </div>

    <h4>Linear indeterminate</h4>
    <div>
      <LinearPreloader />
    </div>

    <h4>Linear determinate</h4>
    <div>
      <LinearPreloader progress={70} />
    </div>

  </div>);

export default PreloaderDemo;
