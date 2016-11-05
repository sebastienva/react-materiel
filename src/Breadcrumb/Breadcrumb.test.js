import React from 'react';
import { shallow } from 'enzyme';

import Breadcrumb from './Breadcrumb';

describe('<Breadcrumb/>', function () {
  it('should render breadcrumb with 2 elements', () => {
    const wrapper = shallow(<Breadcrumb><span>A</span><span>B</span></Breadcrumb>);
    expect(wrapper.find('.breadcrumb').length).toEqual(2);
  });
});
