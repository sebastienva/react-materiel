import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Button from './Button';

describe('<Button/>', function () {
  it('should render a raised button', () => {
    const wrapper = shallow(<Button>Test</Button>);
    expect(wrapper.find('.btn').length).to.equal(1);
  });

  it('should render button coutent with ink', () => {
    const wrapper = shallow(<Button>Test</Button>);
    expect(wrapper.find('.btn').text()).to.equal('Test<Ink />');
  });

  it('should render button coutent without ink', () => {
    const wrapper = shallow(<Button noInk>Test</Button>);
    expect(wrapper.find('.btn').text()).to.equal('Test');
  });


  it('should render a disabled button', () => {
    const wrapper = shallow(<Button disabled>Test</Button>);
    expect(wrapper.find('.btn').hasClass('disabled')).to.be.true;
  });

  it('should render a flat button', () => {
    const wrapper = shallow(<Button type="flat">Test</Button>);
    expect(wrapper.find('.btn-flat').length).to.equal(1);
    expect(wrapper.find('.btn').length).to.equal(0);
  });

  it('should render a large button', () => {
    const wrapper = shallow(<Button large>Test</Button>);
    expect(wrapper.find('.btn-large').length).to.equal(1);
    expect(wrapper.find('.btn').length).to.equal(0);
  });

  it('should pass down classes', () => {
    const wrapper = shallow(<Button className="test">Test</Button>);
    expect(wrapper.find('.btn').hasClass('test')).to.be.true;
  });
});
