import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import Title from '..'

const { describe, it } = global;

describe ('<Title />', function () {
  it('Title should render a title div', function () {
    const wrapper = shallow(<Title name="SDMX" />);
    should(wrapper.find('.title'));
  })
  it('Title should render a h1 elem', function () {
    const wrapper = shallow(<Title name="SDMX" />);
    should(wrapper.matchesElement(<h1 />));
  })
})
