import React from 'react';
import { shallow } from 'enzyme';

import Tabs from './Tabs';
import Tab from './Tab';

describe('<Tabs/>', function () {
  it('should render tabs', () => {
    const wrapper = shallow(<Tabs>
      <Tab key={0} label="Examples">Cool</Tab>
      <Tab key={1} label="Documentation">fasds</Tab>
    </Tabs>);
  });
});
