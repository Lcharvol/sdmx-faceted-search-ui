import React from 'react';
import should from 'should';
import FilterBox from '..';
import Filtre from '../Filtre';
import { shallow } from 'enzyme';

const { describe, it } = global;

describe ('<FilterBox />', function () {
  it('FilterBox should render a filterbox div', function () {
    const wrapper = shallow(<FilterBox
      name="test"
      filters={["test", "test2"]}
    />)
    should(wrapper.find('.filterbox')).length(1);
  })
  it('FilterBox should render a filterboxname div', function () {
    const wrapper = shallow(<FilterBox
      name="test"
      filters={["test", "test2"]}
    />)
    should(wrapper.find('.filterboxname')).length(1);
  })
  it('FilterBox should render 2 Filter', function () {
    const wrapper = shallow(<FilterBox
      name="test"
      filters={["test", "test2"]}
    />)
    should(wrapper.find(Filtre)).length(2);
  })
  it('FilterBox should render 3 Filter', function () {
    const wrapper = shallow(<FilterBox
      name="test"
      filters={["test", "test2", "test3"]}
    />)
    should(wrapper.find(Filtre)).length(3);
  })
})
