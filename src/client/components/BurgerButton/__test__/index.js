import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import BurgerButton from '..'
import App from '../../App';
import store from '../../../store';

const { describe, it } = global;

const displayShowPanel = () => {
  console.log('function');
};

describe('<BurgerButton />', function () {
  it('BurgerButton should render a button', function () {
    const wrapper = shallow(<BurgerButton
      store={store}
      displayShowPanel={displayShowPanel}
    />);
    should(wrapper.matchesElement(<button />))
  })
  it('simulates click events', () => {
    const wrapper = shallow(<BurgerButton
      store={store}
      displayShowPanel={displayShowPanel}
    />);
    wrapper.find('button').simulate('click');
    should(displayShowPanel.calledOnce);
  });
})
