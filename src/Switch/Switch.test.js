import React from 'react';
import { shallow } from 'enzyme';

import Switch from './Switch';

describe('<Switch/>', () => {
  it('should render a switch', () => {
    const wrapper = shallow(<Switch checked />);
    expect(wrapper.find('.mdl-switch').hasClass('is-checked')).toBe(true);
  });

  it('should be checkable', (done) => {
    const wrapper = shallow(
      <Switch
        checked={false}
        onChange={(value) => {
          expect(value).toEqual(true);
          done();
        }}
      />
    );

    wrapper.find('input').simulate('change', { target: { checked: true } });
  });

  it('should be uncheckable', (done) => {
    const wrapper = shallow(
      <Switch
        checked
        onChange={(value) => {
          expect(value).toEqual(false);
          done();
        }}
      />
    );

    wrapper.find('input').simulate('change', { target: { checked: false } });
  });
});
