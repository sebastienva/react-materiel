import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import CircularPreloader from './CircularPreloader';

describe('<CircularPreloader/>', function () {
  it('should render a circular preloader', () => {
    const wrapper = shallow(<CircularPreloader />);
    expect(wrapper.find('.preloader-wrapper').length).to.equal(1);
  });
});
