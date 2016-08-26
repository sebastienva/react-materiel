// @flow
import React, { Component } from 'react';

import { Card } from '../../../src';

class CardDemo extends Component {

  render() {
    return (
      <div>
        <h3>Simple card</h3>
        <Card>
          Test<br />
          Card <br />
          content <br />
          ok <br />
        </Card>
      </div>
    );
  }
}

export default CardDemo;
