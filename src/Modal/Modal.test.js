import React from 'react';
import { mount } from 'enzyme';

import Modal from './Modal';

describe('<Modal/>', () => {
  it('should render a modal', () => {
    const wrapper = mount(<Modal open={true}>Test</Modal>);
    expect(wrapper.find('.mdl-dialog').length).toEqual(1);

  });
});
