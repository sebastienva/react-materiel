import React from 'react';
import { shallow } from 'enzyme';

import CircularPreloader from './CircularPreloader';

describe('<CircularPreloader/>', function () {
  it('should render a circular preloader', () => {
    const wrapper = shallow(<CircularPreloader />);
    expect(wrapper.find('.mdl-spinner').length).toEqual(1);
  });
});
