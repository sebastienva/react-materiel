import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

describe('<Card/>', function () {
  it('should render a card', () => {
    const wrapper = shallow(<Card>Test</Card>);
    expect(wrapper.find('.mdl-card').text()).toContain('Test');
  });
});
