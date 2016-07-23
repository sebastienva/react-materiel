import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Card from './Card';

describe('<Card/>', function () {
  it('should render a card', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find('.card').length).to.equal(1);
  });
});
