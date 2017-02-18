import React from 'react';
import { mount } from 'enzyme';

import Autocomplete from './Autocomplete';

describe('<Autocomplete/>', () => {
  it('should render options', () => {
    const options = [
      { id: 1, name: 'name 1' },
      { id: 2, name: 'name 2' },
    ];

    const wrapper = mount(
      <Autocomplete label="auto" onSearch={() => {}}>
        {options.map(option =>
          (<option key={option.id} value={option.id}>
            {option.name}
          </option>)
        )}
      </Autocomplete>
    );

    expect(wrapper.text()).toEqual('autoname 1name 2');
  });
});
