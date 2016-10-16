// @flow
import React, { Component } from 'react';

import { Chip, ChipContact } from '../../../src';

class ChipDemo extends Component {

  render() {
    return (
      <div>
        <Chip>
          <ChipContact><img alt="contact" src="https://avatars1.githubusercontent.com/u/4148039?v=3&s=40" /></ChipContact>
          Test
        </Chip>
        <Chip>
          <ChipContact>A</ChipContact>
          Test2
        </Chip>
      </div>
    );
  }
}

export default ChipDemo;
