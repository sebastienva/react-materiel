import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Input from './Input';

describe('<Input/>', function () {
  it('should have a floating label', () => {
    const wrapper = shallow(<Input label="bla" float />);

    // check labelt
    expect(wrapper.find('label').text()).to.equal('bla');

    // checck "floating" on focus
    wrapper.find('input').simulate('focus');
    expect(wrapper.find('label').hasClass('active')).to.be.true;

    // still floating on blur when the value is not empty
    wrapper.setProps({ value: 'test' });
    wrapper.find('input').simulate('blur');
    expect(wrapper.find('label').hasClass('active')).to.be.true;

    // stop floating on blur when the value is empty
    wrapper.find('input').simulate('focus');
    wrapper.setProps({value: ''});
    wrapper.find('input').simulate('blur');
    expect(wrapper.find('label').hasClass('active')).to.be.false;
  });

  it('should be clickable', () => {
    // mount to test ref
    const wrapper = mount(<Input label="bla" float />);
    wrapper.find('label').simulate('click');
    expect(wrapper.find('label').hasClass('active')).to.be.true;
  });

  it('should have a placeholder', () => {
    const wrapper = shallow(<Input label="bla" />);

    expect(wrapper.find('label').length).to.equal(0);
    expect(wrapper.find('input').prop('placeholder')).to.equal('bla');
  });

  it('should return value on onChange', (done) => {
    const wrapper = shallow(
      <Input
        label="change"
        onChange={(value) => {
          expect(value).to.equal('test');
          done();
        }}
      />
    );

    wrapper.find('input').simulate('change', { target: { value: 'test' } });
  });
});
