import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Switch from './Switch';

describe('<Switch/>', function () {
  it('should render a switch', () => {
    const wrapper = shallow(<Switch value={true}/>);
    expect(wrapper.find('input').prop('type')).to.equal('checkbox');
  });

  it('should be checkable', (done) => {
    const wrapper = shallow(
      <Switch
        checked={false}
        onChange={(value) => {
          expect(value).to.equal(true);
          done();
        }}
      />
    );

    wrapper.find('input').simulate('change', { target: { checked: true } });
  });

  it('should be uncheckable', (done) => {
    const wrapper = shallow(
      <Switch
        checked
        onChange={(value) => {
          expect(value).to.equal(null);
          done();
        }}
      />
    );

    wrapper.find('input').simulate('change', { target: { checked: false } });
  });

});
