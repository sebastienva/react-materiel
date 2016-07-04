import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Input from './Input';

describe('<Input/>', function () {
  it('should have a floating label', () => {
    const wrapper = shallow(<Input label="bla" float="true" />);
    expect(wrapper.find('label').text()).to.equal('bla');
    // checck "floating" on focus
    wrapper.find('input').simulate('focus');
    expect(wrapper.find('label').hasClass('active')).to.be.true;

    // todo : split ?
    wrapper.setProps({value: 'test'});

    wrapper.find('input').simulate('blur');
    expect(wrapper.find('label').hasClass('active')).to.be.true;

    wrapper.setProps({value: ''});
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');

    expect(wrapper.find('label').hasClass('active')).to.be.false;
  });

  it('should be clickable', () => {
      // mount to test refs
      const wrapper = mount(<Input label="bla" float="true" />);

      wrapper.find('label').simulate('click');

      console.log(wrapper.html());
      expect(wrapper.find('label').hasClass('active')).to.be.true;

  });

  it('should have a placeholder', () => {
    const wrapper = shallow(<Input label="bla" />);
    expect(wrapper.find('label').length).to.equal(0);
    expect(wrapper.find('input').prop('placeholder')).to.equal('bla');
  });

});
