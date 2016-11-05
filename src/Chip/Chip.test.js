import React from 'react';
import { shallow } from 'enzyme';

import Chip from './Chip';

describe('<Chip/>', function () {
  it('should render a chip with children', () => {
    const wrapper = shallow(<Chip>Test</Chip>);
    expect(wrapper.find('.mdl-chip').text()).toEqual('Test');
  });

  it('should render be deletable', () => {
    const handleClose = jest.fn();

    const wrapper = shallow(
      <Chip onClose={handleClose} >Test</Chip>
    );
    wrapper.find('.mdl-chip__action').simulate('click', { });
    expect(handleClose).toHaveBeenCalled();
  });

});
