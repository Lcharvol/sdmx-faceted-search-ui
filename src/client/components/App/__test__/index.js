import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import App from '..';
import Container from '../../Container';

const { describe, it } = global;

// describe ('<App />', function () {
//   it('App should render a div', function () {
//     const store = {title: 'SDMX'};
//     const root = (
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//     const wrapper = shallow(root);
//     should(wrapper.find(Container)).length(1);
//   })
// })
