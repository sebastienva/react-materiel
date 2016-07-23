import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Modal from './Modal';

describe('<Modal/>', function () {
  it('should render a modal', () => {
    const wrapper = mount(<Modal open={true}>Test</Modal>);
    expect(wrapper.find('.modal').length).to.equal(1);

    wrapper.unmount();
  });
});
