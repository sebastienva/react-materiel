import React from 'react';
import { mount } from 'enzyme';

import Pagination from './Pagination';

describe('<Pagination/>', () => {
  it('should render 5 pages', () => {
    const wrapper = mount(<Pagination totalPage={5} currentPage={1}></Pagination>);

    expect(wrapper.find('li').length).toEqual(7);
    expect(wrapper.find('.is-active').text()).toEqual('1');
    expect(wrapper.find('li').at(0).hasClass('disabled')).toBe(true);
  });

  it('should change to next page', () => {
    const handleChange = jest.fn();

    const wrapper = mount(<Pagination totalPage={5} currentPage={1} onChange={(page) => {
      expect(page).toEqual(2);
      handleChange();
    }}></Pagination>);

    wrapper.find('li').at(6).simulate('click');
    expect(handleChange).toHaveBeenCalled();
  });

  it('should change to prev page', () => {
    const handleChange = jest.fn();

    const wrapper = mount(<Pagination totalPage={5} currentPage={3} onChange={(page) => {
      expect(page).toEqual(2);
      handleChange();
    }}></Pagination>);

    wrapper.find('li').at(0).simulate('click');
    expect(handleChange).toHaveBeenCalled();
  });

  it('should change to a page', () => {
    const handleChange = jest.fn()

    const wrapper = mount(<Pagination totalPage={5} currentPage={1} onChange={(page) => {
      expect(page).toEqual(2);
      handleChange();
    }}></Pagination>);

    wrapper.find('li').at(2).simulate('click');
    expect(handleChange).toHaveBeenCalled();
  });

  it('should change render 10 pages with 2 fillers', () => {
    const wrapper = mount(<Pagination totalPage={10} currentPage={5}></Pagination>);

    expect(wrapper.find('.filler').length).toEqual(2);
    expect(wrapper.find('.is-active').text()).toEqual('5');
    expect(wrapper.text()).toEqual('chevron_left12...456...910chevron_right');
  });

  it('should change render 10 pages with 1 right filler', () => {
    const wrapper = mount(<Pagination totalPage={10} currentPage={2}></Pagination>);

    expect(wrapper.find('.filler').length).toEqual(1);
    expect(wrapper.find('.is-active').text()).toEqual('2');
    expect(wrapper.text()).toEqual('chevron_left12345...910chevron_right');
  });

  it('should change render 10 pages with 1 left filler', () => {
      const wrapper = mount(<Pagination totalPage={10} currentPage={10}></Pagination>);

      expect(wrapper.find('.filler').length).toEqual(1);
      expect(wrapper.find('.is-active').text()).toEqual('10');
      expect(wrapper.text()).toEqual('chevron_left12...678910chevron_right');
      expect(wrapper.find('li').at(9).hasClass('disabled')).toBe(true);
    });
});
