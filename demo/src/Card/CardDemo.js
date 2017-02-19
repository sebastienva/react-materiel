// @flow
import React, { Component } from 'react';

import { Card, Tabs, Tab } from '../../../src';

class CardDemo extends Component {

  render() {
    return (
      <Tabs>
        <Tab label="Examples">
          <h3>Simple card</h3>
          <Card>
            Test<br />
            Card <br />
            content <br />
            ok <br />
          </Card>
        </Tab>
        <Tab label="Documentation">
          wip
        </Tab>
      </Tabs>
    );
  }
}

export default CardDemo;
