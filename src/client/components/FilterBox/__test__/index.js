import React from 'react';
import should from 'should';
import FilterBox from '..';
import Filtre from '../Filtre';
import { shallow } from 'enzyme';

const { describe, it } = global;

describe('<FilterBox />', function () {
  const wrapper = shallow(<FilterBox
    name="test"
    filters={[
      {
        id: 0,
        name: 'Vélo BMX',
      },
      {
        id: 1,
        name: 'Vélo de route',
      },
      {
        id: 2,
        name: 'Vélo électrique',
      },
      {
        id: 3,
        name: 'Vélo pliable',
      },
      {
        id: 4,
        name: 'Vélo tout terrain',
      },
      {
        id: 5,
        name: 'All',
      }
    ]}
    filter={() => {}}
  />)
  it('FilterBox should render a filterbox div', function () {
    should(wrapper.find('.filterbox')).length(1);
  })
  it('FilterBox should render a filterboxname div', function () {
    should(wrapper.find('.filterboxname')).length(1);
  })
  it('FilterBox should render 6 Filter', function () {
    should(wrapper.find(Filtre)).length(6);
  })
  it('FilterBox should render 3 Filter', function () {
    const wrapper = shallow(<FilterBox
      name="test"
      filters={[
        {
          id: 0,
          name: 'Vélo BMX',
        },
        {
          id: 1,
          name: 'Vélo de route',
        },
        {
          id: 2,
          name: 'Vélo électrique',
        }
      ]}
    />)
    should(wrapper.find(Filtre)).length(3);
  })
})
