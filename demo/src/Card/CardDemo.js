// @flow
import React, { Component } from 'react';

import { Card, Tabs, Tab } from '../../../src';
import Markdown from 'react-remarkable';
import input from 'raw-loader!../../../src/Card/README.md';

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
          <Markdown source={input} />
        </Tab>
      </Tabs>
    );
  }
}

export default CardDemo;
