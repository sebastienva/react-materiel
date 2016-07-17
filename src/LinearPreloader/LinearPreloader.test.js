import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import LinearPreloader from './LinearPreloader';

describe('<LinearPreloader/>', function () {
  it('should render a "determinate" linear preloader', () => {
    const wrapper = shallow(<LinearPreloader progress={70} />);
    expect(wrapper.find('.determinate').length).to.equal(1);
  });

  it('should render an "indeterminate" linear preloader', () => {
    const wrapper = shallow(<LinearPreloader />);
    expect(wrapper.find('.indeterminate').length).to.equal(1);
  });
});
