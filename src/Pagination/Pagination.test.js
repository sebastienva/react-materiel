import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Pagination from './Pagination';

describe('<Pagination/>', function () {
  it('should render 5 pages', () => {
    const wrapper = mount(<Pagination totalPage={5} currentPage={1}></Pagination>);

    expect(wrapper.find('li').length).to.equal(7);
    expect(wrapper.find('.active').text()).to.equal('1');
    expect(wrapper.find('li').at(0).hasClass('disabled')).to.be.true;
  });

  it('should change to next page', () => {
    const handleChange = sinon.spy()

    const wrapper = mount(<Pagination totalPage={5} currentPage={1} onChange={(page) => {
      expect(page).to.equal(2);
      handleChange();
    }}></Pagination>);

    wrapper.find('li').at(6).simulate('click');
    expect(handleChange.calledOnce).to.be.true;
  });

  it('should change to prev page', () => {
    const handleChange = sinon.spy()

    const wrapper = mount(<Pagination totalPage={5} currentPage={3} onChange={(page) => {
      expect(page).to.equal(2);
      handleChange();
    }}></Pagination>);

    wrapper.find('li').at(0).simulate('click');
    expect(handleChange.calledOnce).to.be.true;
  });

  it('should change to a page', () => {
    const handleChange = sinon.spy()

    const wrapper = mount(<Pagination totalPage={5} currentPage={1} onChange={(page) => {
      expect(page).to.equal(2);
      handleChange();
    }}></Pagination>);

    wrapper.find('li').at(2).simulate('click');
    expect(handleChange.calledOnce).to.be.true;
  });

  it('should change render 10 pages with 2 fillers', () => {
    const wrapper = mount(<Pagination totalPage={10} currentPage={5}></Pagination>);

    expect(wrapper.find('.filler').length).to.equal(2);
    expect(wrapper.find('.active').text()).to.equal('5');
    expect(wrapper.text()).to.equal('chevron_left12...456...910chevron_right');
  });

  it('should change render 10 pages with 1 right filler', () => {
    const wrapper = mount(<Pagination totalPage={10} currentPage={2}></Pagination>);

    expect(wrapper.find('.filler').length).to.equal(1);
    expect(wrapper.find('.active').text()).to.equal('2');
    expect(wrapper.text()).to.equal('chevron_left12345...910chevron_right');
  });

  it('should change render 10 pages with 1 left filler', () => {
      const wrapper = mount(<Pagination totalPage={10} currentPage={10}></Pagination>);

      expect(wrapper.find('.filler').length).to.equal(1);
      expect(wrapper.find('.active').text()).to.equal('10');
      expect(wrapper.text()).to.equal('chevron_left12...678910chevron_right');
      expect(wrapper.find('li').at(9).hasClass('disabled')).to.be.true
    });
});
