import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Autocomplete from './Autocomplete';

describe('<Autocomplete/>', function () {
  it('should render options', () => {

    let options = [{id: 1, name: 'name 1'}, {id: 2, name: 'name 2'}];

    const wrapper = mount(
      <Autocomplete label="auto" onSearch={() => {}}>
        {options.map(option =>
          (<option key={option.id} value={option.id}>
            {option.name}
          </option>)
        )}
      </Autocomplete>
    );

    expect(wrapper.find('li').length).to.equal(2);
    expect(wrapper.find('li').at(0).text()).to.equal('name 1');
    expect(wrapper.find('li').at(1).text()).to.equal('name 2');
  });
});
