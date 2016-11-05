import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

describe('<Checkbox/>', function () {
  it('should render a checked checkbox', () => {
    const wrapper = shallow(<Checkbox checked />);
    expect(wrapper.find('input').prop('checked')).toBe(true);
    expect(wrapper.find('.mdl-checkbox').hasClass('is-checked')).toBe(true);
  });


  it('should call onChange callback', () => {

    const handleChange = jest.fn()
    const wrapper = shallow(
      <Checkbox checked onChange={(checked) => {
        expect(checked).toBe(false);
        handleChange();
      }} />
    );

    wrapper.find('.mdl-checkbox__input').simulate('change');
    expect(handleChange).toHaveBeenCalled();
  });
});
