import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import ResultPanel from '..';

const { describe, it } = global;

describe ('<ResultPanel />', function () {
  it('ResultPanel should render a resultpanel div', function () {
    const wrapper = shallow(<ResultPanel
      displayShowPanel={() => {}}
      searchValue=""
      list={[]}
    />);
    should(wrapper.find('.resultpanel')).length(1);
  })
})
