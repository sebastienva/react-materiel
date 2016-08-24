// @flow
import React, { Component } from 'react';

import { Button } from '../../../src';

class ButtonDemo extends Component {

  render() {
    return (
      <div>
        <h4>Raised</h4>
        <Button>Raised button</Button>
        <Button color="colored">Colored button</Button>

        <h4>Large</h4>
        <Button large>Large button</Button>

        <h4>Flat</h4>
        <Button type="flat">Flat button</Button>

        <h4>Floating</h4>
        <Button type="floating">+</Button>

        <h4>Disabled</h4>
        <Button disabled>Disabled</Button>

      </div>
    );
  }
}

export default ButtonDemo;
