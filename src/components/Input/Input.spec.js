import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Input from './Input';

describe('<Input/>', function () {
  it('should have a floating label', () => {
    const wrapper = shallow(<Input label="bla" float="true" />);
    expect(wrapper.find('label').text()).to.equal('bla');
    // checck "floating" on focus
    wrapper.find('input').simulate('focus');
    expect(wrapper.find('label').hasClass('active')).to.be.true;
  });

  it('should have a placeholder', () => {
    const wrapper = shallow(<Input label="bla" />);
    expect(wrapper.find('label').length).to.equal(0);
    expect(wrapper.find('input').prop('placeholder')).to.equal('bla');
  });

});
