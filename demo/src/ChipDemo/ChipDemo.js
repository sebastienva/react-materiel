// @flow
import React, { Component } from 'react';

import { Chip } from '../../../src';

class ChipDemo extends Component {

  render() {
    return (
      <div>
        <Chip>
          <img src="https://avatars1.githubusercontent.com/u/4148039?v=3&s=40" /> Test
        </Chip>
      </div>
    );
  }
}

export default ChipDemo;
