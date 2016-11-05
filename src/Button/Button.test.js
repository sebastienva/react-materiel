import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from './Button';

describe('<Button/>', function () {
  it('should render a raised button', () => {
    const wrapper = mount(<Button>Test</Button>);
    expect(wrapper.find('.mdl-button').length).toEqual(1);

    wrapper.simulate('mouseLeave');
  });

  it('should render button coutent with ink', () => {
    const wrapper = shallow(<Button>Test</Button>);
    expect(wrapper.find('.mdl-button').text()).toEqual('Test<Ink />');
  });

  it('should render button coutent without ink', () => {
    const wrapper = shallow(<Button noInk>Test</Button>);
    expect(wrapper.find('.mdl-button').text()).toEqual('Test');
  });

  it('should render a disabled button', () => {
    const wrapper = shallow(<Button disabled>Test</Button>);
    expect(wrapper.find('.mdl-button').prop('disabled')).toBe(true);
  });

  it('should render a flat button', () => {
    const wrapper = shallow(<Button type="flat">Test</Button>);
    expect(wrapper.find('.mdl-button').length).toEqual(1);
    expect(wrapper.find('.mdl-button--raised').length).toEqual(0);
    expect(wrapper.find('.mdl-button--fab').length).toEqual(0);
  });

  it('should render a floating button', () => {
    const wrapper = shallow(<Button type="floating">Test</Button>);
    expect(wrapper.find('.mdl-button--fab').length).toEqual(1);
  });

  it('should pass down classes', () => {
    const wrapper = shallow(<Button className="test">Test</Button>);
    expect(wrapper.find('.mdl-button').hasClass('test')).toBe(true);
  });
});
