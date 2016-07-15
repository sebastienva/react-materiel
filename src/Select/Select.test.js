import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Select from './Select';

describe('<Select/>', function () {
  it('should have a label', () => {
    const wrapper = mount(<Select label="Select label"><option value="1">Test</option></Select>);

    // check label
    expect(wrapper.find('label').text()).to.equal('Select label');
  });

  it('should render options', (done) => {
    const wrapper = mount(
      <Select label="Select label">
        <option value="1">Test</option>
        <option value="2">Test 2</option>
      </Select>
    );
    // check options values
    expect(wrapper.find('li').length).to.equal(2);
    expect(wrapper.find('li').at(0).text()).to.equal('Test');
    expect(wrapper.find('li').at(1).text()).to.equal('Test 2');

    // check option "show"
    wrapper.find('.select-wrapper').simulate('focus');
    expect(wrapper.find('ul').hasClass('active')).to.be.true;

    // check option "hide"
    wrapper.find('.select-wrapper').simulate('keyDown', { keyCode: 9 });
    expect(wrapper.find('ul').hasClass('hideAnimation')).to.be.true;
    setTimeout(() => {
      expect(wrapper.find('ul').hasClass('active')).to.be.false;
      done();
    }, 300); // wait "animation" delay
  });

  it('option should be selectable', () => {
    const wrapper = mount(
      <Select
        label="Select label"
        onChange={(value) => {
          expect(value).to.equal(2);
        }}
      >
        <option value={1}>Test</option>
        <option value={2}>Test 2</option>
      </Select>
    );

    // check option "show"
    wrapper.find('.select-wrapper').simulate('focus');
    expect(wrapper.find('ul').hasClass('active')).to.be.true;

    wrapper.find('li').at(1).simulate('click');
  });

  it('should render "default" value', () => {
    const wrapper = mount(
      <Select label="Select label" value="1">
        <option value="1">Value 1</option>
      </Select>
    );

    expect(wrapper.find('label').hasClass('active')).to.be.true;
    expect(wrapper.find('.preview-item').text()).to.equal('Value 1');
  });

  it('should render a "preview" value', () => {
    const wrapper = mount(
      <Select label="Select label" value="1">
        <option value="1" preview="test 1">Value 1</option>
      </Select>
    );

    expect(wrapper.find('label').hasClass('active')).to.be.true;
    expect(wrapper.find('.preview-item').text()).to.equal('test 1');
  });

  it('should render a group', () => {
    const wrapper = mount(
      <Select label="Select label" value="1">
        <optgroup label="Group 1">
          <option value="1">Value 1</option>
        </optgroup>
      </Select>
    );

    expect(wrapper.find('li').length).to.equal(2);
    expect(wrapper.find('li').at(0).hasClass('optgroup')).to.be.true;
    expect(wrapper.find('li').at(0).text()).to.equal('Group 1');
    expect(wrapper.find('li').at(1).text()).to.equal('Value 1');
  });

  it('should render multiple options', () => {
    const wrapper = mount(
      <Select label="Select label" multiple value={[]} onChange={(value) => {
        expect(value).to.deep.equal([2]);
      }}>
        <option value={1}>Value 1</option>
        <option value={2}>Value 2</option>
      </Select>
    );

    wrapper.find('.select-wrapper').simulate('focus');
    wrapper.find('li').at(1).simulate('click');
  });


    it('should render default multiple value', () => {
      const wrapper = mount(
        <Select
          label="Select label"
          multiple value={[1, 2]}
          onChange={(value) => {
            expect(value).to.deep.equal([2]);
          }}>
          <option value={1}>Value 1</option>
          <option value={2}>Value 2</option>
        </Select>
      );

      expect(wrapper.find('li').at(0).hasClass('active')).to.be.true;
      expect(wrapper.find('li').at(1).hasClass('active')).to.be.true;

      // unselect value
      wrapper.find('li').at(0).simulate('click');
    });
});
