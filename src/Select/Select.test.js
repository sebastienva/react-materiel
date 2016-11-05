import React from 'react';
import { shallow, mount } from 'enzyme';

import Select from './Select';

describe('<Select/>', function () {
  it('should have a label', () => {
    const wrapper = mount(<Select label="Select label"><option value="1">Test</option></Select>);

    // check label
    expect(wrapper.find('label').text()).toEqual('Select label');
  });

  it('should render options', () => {
    const wrapper = mount(
      <Select label="Select label">
        <option value="1">Test</option>
        <option value="2">Test 2</option>
      </Select>
    );

    // check options values
    expect(wrapper.find('li').length).toEqual(2);
    expect(wrapper.find('li').at(0).text()).toEqual('Test');
    expect(wrapper.find('li').at(1).text()).toEqual('Test 2');

    // check option "show"
    wrapper.find('.mdl-textfield').simulate('click');
    expect(wrapper.find('.mdl-menu__container').hasClass('is-visible')).toEqual(true);

    // check option "hide"
    wrapper.find('.mdl-textfield').simulate('keyDown', { keyCode: 9 });

    expect(wrapper.find('.mdl-menu__container').hasClass('is-visible')).toEqual(false);
  });

  it('option should be selectable', (done) => {
    const wrapper = mount(
      <Select
        label="Select label"
        onChange={(value) => {
          expect(value).toEqual(2);
        }}
      >
        <option value={1}>Test</option>
        <option value={2}>Test 2</option>
      </Select>
    );

    // check option "show"
    wrapper.find('.mdl-textfield').simulate('focus');
    expect(wrapper.find('.mdl-textfield').hasClass('is-focused')).toEqual(true);

    wrapper.find('li').at(1).simulate('click');

    setTimeout(() => {
      expect(wrapper.find('.mdl-menu__container').hasClass('is-visible')).toEqual(false);
      done();
    }, 300); // wait "animation" delay
  });


  it('should render "default" value', () => {
    const wrapper = mount(
      <Select label="Select label" value="1">
        <option value="1">Value 1</option>
      </Select>
    );

    expect(wrapper.find('.mdl-textfield').hasClass('is-dirty')).toEqual(true);
    expect(wrapper.find('.mdl-menu__preview').text()).toContain('Value 1');
  });

  it('should render a "preview" value', () => {
    const wrapper = mount(
      <Select label="Select label" value="1">
        <option value="1" preview="test 1">Value 1</option>
      </Select>
    );

    expect(wrapper.find('.mdl-textfield').hasClass('is-dirty')).toEqual(true);
    expect(wrapper.find('.mdl-menu__preview').text()).toContain('test 1');
  });

  it('should render a group', () => {
    const wrapper = mount(
      <Select label="Select label" value="1">
        <optgroup label="Group 1">
          <option value="1">Value 1</option>
        </optgroup>
      </Select>
    );

    expect(wrapper.find('li').length).toEqual(2);
    expect(wrapper.find('li').at(0).hasClass('mdl-menu__group')).toBe(true);
    expect(wrapper.find('li').at(0).text()).toEqual('Group 1');
    expect(wrapper.find('li').at(1).text()).toEqual('Value 1');
  });

  it('should render multiple options', (done) => {
    const wrapper = mount(
      <Select label="Select label" multiple value={[]} onChange={(value) => {
        expect(value).toEqual([2]);
        done();
      }}>
        <option value={1}>Value 1</option>
        <option value={2}>Value 2</option>
      </Select>
    );

    wrapper.find('.mdl-textfield').simulate('focus');
    wrapper.find('li').at(1).simulate('click');
  });

  it('should render default multiple value', (done) => {
     const wrapper = mount(
       <Select
         label="Select label"
         multiple value={[1, 2]}
         onChange={(value) => {
           expect(value).toEqual([2]);
           done();
         }}>
         <option value={1}>Value 1</option>
         <option value={2}>Value 2</option>
       </Select>
     );

     expect(wrapper.find('li').at(0).hasClass('is-selected')).toBe(true);
     expect(wrapper.find('li').at(1).hasClass('is-selected')).toBe(true);

     // unselect value
     wrapper.find('li').at(0).simulate('click');
   });

});
