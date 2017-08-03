import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import Items from '..';

const { describe, it} = global;

describe ('<Items />', function () {
  it('Items should render an items div', function () {
    const wrapper = shallow(<Items
      name="test"
    />);
    should(wrapper.find('.items')).length(1);
  })
  it('Items should render an itemsname div', function () {
    const wrapper = shallow(<Items
      name="test"
    />);
    should(wrapper.find('.itemsname')).length(1);
  })
})
