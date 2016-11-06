import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

describe('<Input/>', () => {
  it('should have a floating label', () => {
    const wrapper = shallow(<Input label="bla" float value="" />);

    // check labelt
    expect(wrapper.find('label').text()).toEqual('bla');

    // check "floating" on focus
    wrapper.find('input').simulate('focus');
    expect(wrapper.find('.mdl-textfield').hasClass('is-focused')).toBe(true);

    // still floating on blur when the value is not empty
    wrapper.setProps({ value: 'test' });
    wrapper.find('input').simulate('blur');
    expect(wrapper.find('.mdl-textfield').hasClass('is-dirty')).toBe(true);

    // stop floating on blur when the value is empty
    wrapper.find('input').simulate('focus');
    wrapper.setProps({value: ''});
    wrapper.find('input').simulate('blur');
    expect(wrapper.find('.mdl-textfield').hasClass('is-focused')).toBe(false);
  });

  it('should have a placeholder', () => {
    const wrapper = shallow(<Input label="bla" value="" />);

    expect(wrapper.find('label').text()).toEqual('bla');
    expect(wrapper.find('.mdl-textfield').hasClass('mdl-textfield--floating-label')).toBe(false);
  });

  it('should return value on onChange', (done) => {
    const wrapper = shallow(
      <Input
        label="change"
        value=""
        onChange={(value) => {
          expect(value).toEqual('test');
          done();
        }}
      />
    );

    wrapper.find('input').simulate('change', { target: { value: 'test' } });
  });

  it('should call blur and focus callback', () => {
    const handleBlur = jest.fn();
    const handleFocus = jest.fn();

    const wrapper = shallow(
      <Input label="test" value="" onFocus={handleFocus} onBlur={handleBlur} />
    );

    wrapper.find('input').simulate('focus');
    expect(handleFocus).toHaveBeenCalled();

    wrapper.find('input').simulate('blur');
    expect(handleBlur).toHaveBeenCalled();
  });

  it('should have a character counter', () => {
    const wrapper = shallow(<Input label="bla" length={10} value="test" />);

    expect(wrapper.find('.mdl-textfield__counter').text()).toEqual('4 / 10');
  });

  it('should pass down undefined props', () => {
    const wrapper = shallow(<Input label="bla" maxLength="10" value="test" />);

    expect(wrapper.find('input').prop('maxLength')).toEqual('10');
  });
});
