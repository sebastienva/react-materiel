import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Input from './Input';

describe('<Input/>', function () {
  it('should have a floating label', () => {
    const wrapper = shallow(<Input label="bla" float value="" />);

    // check labelt
    expect(wrapper.find('label').text()).to.equal('bla');

    // check "floating" on focus
    wrapper.find('input').simulate('focus');
    expect(wrapper.find('.mdl-textfield').hasClass('is-focused')).to.be.true;

    // still floating on blur when the value is not empty
    wrapper.setProps({ value: 'test' });
    wrapper.find('input').simulate('blur');
    expect(wrapper.find('.mdl-textfield').hasClass('is-dirty')).to.be.true;

    // stop floating on blur when the value is empty
    wrapper.find('input').simulate('focus');
    wrapper.setProps({value: ''});
    wrapper.find('input').simulate('blur');
    expect(wrapper.find('.mdl-textfield').hasClass('is-focused')).to.be.false;
  });

  it('should have a placeholder', () => {
    const wrapper = shallow(<Input label="bla" value="" />);

    expect(wrapper.find('label').text()).to.equal('bla');
    expect(wrapper.find('.mdl-textfield').hasClass('mdl-textfield--floating-label')).to.be.false;
  });

  it('should return value on onChange', (done) => {
    const wrapper = shallow(
      <Input
        label="change"
        value=""
        onChange={(value) => {
          expect(value).to.equal('test');
          done();
        }}
      />
    );

    wrapper.find('input').simulate('change', { target: { value: 'test' } });
  });

  it('should call blur and focus callback', () => {
    const handleBlur = sinon.spy();
    const handleFocus = sinon.spy();

    const wrapper = shallow(
      <Input label="test" value="" onFocus={handleFocus} onBlur={handleBlur} />
    );

    wrapper.find('input').simulate('focus');
    expect(handleFocus.calledOnce).to.be.true;

    wrapper.find('input').simulate('blur');
    expect(handleBlur.calledOnce).to.be.true;
  });

  it('should have a character counter', () => {
    const wrapper = shallow(<Input label="bla" length={10} value="test" />);

    expect(wrapper.find('.mdl-textfield__counter').text()).to.equal('4 / 10');
  });

  it('should pass down undefined props', () => {
    const wrapper = shallow(<Input label="bla" maxLength="10" value="test" />);

    expect(wrapper.find('input').prop('maxLength')).to.equal('10');
  });
});
