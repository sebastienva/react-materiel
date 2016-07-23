import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Checkbox from './Checkbox';

describe('<Checkbox/>', function () {
  it('should render a checked checkbox', () => {
    const wrapper = shallow(<Checkbox checked />);
    expect(wrapper.find('input').prop('checked')).to.be.true;
  });

  it('should render a filled checkbox', () => {
    const wrapper = shallow(<Checkbox filled />);
    expect(wrapper.find('input').hasClass('filled-in')).to.be.true;
  });

  it('should call onChange callback', () => {

    const handleChange = sinon.spy()
    const wrapper = shallow(
      <Checkbox checked onChange={(checked) => {
        expect(checked).to.be.false;
        handleChange();
      }} />
    );

    wrapper.simulate('click');
    expect(handleChange.calledOnce).to.be.true;
  });
});
