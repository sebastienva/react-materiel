// @flow
import React from 'react';
import { CircularPreloader, LinearPreloader } from '../../../src';

const PreloaderDemo = () =>
  (<div>
    <h4>Circular</h4>
    <div className="row">
      <div className="col s2">
        <CircularPreloader />
      </div>
      <div className="col s2">
        <CircularPreloader singleColor />
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

    <h4>Linear buffer</h4>
    <div>
      <LinearPreloader progress={30} buffer={15} />
    </div>

  </div>);

export default PreloaderDemo;
