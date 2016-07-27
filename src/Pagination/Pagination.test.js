import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Pagination from './Pagination';

describe('<Pagination/>', function () {
  it('should render a basic Pagination with 5 pages', () => {
    const wrapper = mount(<Pagination totalPage={5} currentPage={1}></Pagination>);

    expect(wrapper.find('li').length).to.equal(7);

    expect(wrapper.find('.active').text()).to.equal('1');

    expect(wrapper.find('li').at(0).hasClass('disabled')).to.be.true

  });
});
