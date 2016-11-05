import React from 'react';
import { mount } from 'enzyme';

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
  });
});
