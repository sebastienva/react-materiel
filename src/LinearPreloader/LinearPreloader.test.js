import React from 'react';
import { shallow } from 'enzyme';

import LinearPreloader from './LinearPreloader';

describe('<LinearPreloader/>', () => {
  it('should render a "determinate" linear preloader', () => {
    const wrapper = shallow(<LinearPreloader progress={70} />);
    expect(wrapper.find('.mdl-progress__indeterminate').length).toEqual(0);
  });

  it('should render an "indeterminate" linear preloader', () => {
    const wrapper = shallow(<LinearPreloader />);
    expect(wrapper.find('.mdl-progress__indeterminate').length).toEqual(1);
  });
});
