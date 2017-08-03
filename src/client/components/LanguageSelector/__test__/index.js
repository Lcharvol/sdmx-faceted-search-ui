import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import { Button, Collapse } from '@blueprintjs/core';
import LanguageSelector from '..';

const { describe, it } = global;
const language = ['Fr', 'En'];

describe('<LanguageSelector />', function () {
  it('LanguageSelector should render a languageselector div', function () {
    const wrapper = shallow(<LanguageSelector
      language={language}
    />);
    should(wrapper.find('.languageselector'));
  })
  it('LanguageSelector should render a Button Component', function () {
    const wrapper = shallow(<LanguageSelector
      language={language}
    />);
    should(wrapper.find(Button));
  })
  it('LanguageSelector should render a Collapse Component', function () {
    const wrapper = shallow(<LanguageSelector
      language={language}
    />);
    should(wrapper.find(Collapse));
  })
})
