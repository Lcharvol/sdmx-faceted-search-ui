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
      dataflows={[]}
    />);
    should(wrapper.find('.resultpanel')).length(1);
  })
})
