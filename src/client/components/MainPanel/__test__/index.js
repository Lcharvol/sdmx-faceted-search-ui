import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import MainPanel from '..';
import SearchPanel from '../../SearchPanel';
import ResultPanel from '../../ResultPanel';

const { describe, it } = global;

const displayShowPanel = () => {
  console.log("fonction");
}

describe ('<MainPanel />', function () {
  it('MainPanel should render a mainpanel div', function () {
    const wrapper = shallow(<MainPanel
      displayShowPanel={displayShowPanel}
      size="100"
      list={[]}
    />);
    should(wrapper.find('.mainpanel')).length(1);
  })
  it('MainPanel should render a mainpanel_inner div', function () {
    const wrapper = shallow(<MainPanel
      displayShowPanel={displayShowPanel}
      size="100"
      list={[]}
    />);
    should(wrapper.find('.mainpanel_inner')).length(1);
  })
  it('MainPanel should render a SearchPanel component', function () {
    const wrapper = shallow(<MainPanel
      displayShowPanel={displayShowPanel}
      size="100"
      list={[]}
    />);
    should(wrapper.find(SearchPanel)).length(1);
  })
  it('MainPanel should render a ResultPanel component', function () {
    const wrapper = shallow(<MainPanel
      displayShowPanel={displayShowPanel}
      size="100"
      list={[]}
    />);
    should(wrapper.find(ResultPanel)).length(1);
  })
})
