import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import FacetedBox from '../../FacetedBox';
import Items from '../Items';

const { describe, it } = global;

describe('<FacetedBox />', function () {
  const wrapper = shallow(<FacetedBox
    name="test"
    facets={[
      {
        id: 0,
        name: 'All',
      },
      {
        id: 1,
        name: 'sport',
      },
      {
        id: 2,
        name: 'Camping, randonnée',
      },
      {
        id: 3,
        name: 'Equipement du cycliste',
      }
    ]}
    facetedSearch={() => {}}
  />);
  it('FacetedBox should render a facetedbox div', function () {
    should(wrapper.find('.facetedbox'));
  })
  it('FacetedBox should render a facetedboxname div', function () {
    should(wrapper.find('.facetedboxname'));
  })
  it('FacetedBox should render a 4 Items', function () {
    should(wrapper.find(Items));
  })
  it('FacetedBox should render a 2 Items', function () {
    const wrapper = shallow(<FacetedBox
      name="test"
      facets={['Tout', 'Sports, vacances']}
    />);
    should(wrapper.find(Items));
  })
})
