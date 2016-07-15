import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Chip from './Chip';

describe('<Chip/>', function () {
  it('should render a chip with children', () => {
    const wrapper = shallow(<Chip>Test</Chip>);
    expect(wrapper.find('.chip').text()).to.equal('Test');
  });

  it('should render be deletable', () => {
    const handleClose = sinon.spy();

    const wrapper = shallow(
      <Chip onClose={handleClose} >Test</Chip>
    );
    wrapper.find('.chip-close').simulate('click', { });
    expect(handleClose.calledOnce).to.be.true;
  });

});
