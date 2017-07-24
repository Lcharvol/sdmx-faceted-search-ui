import React from 'react';
import PropTypes from 'prop-types';

import MainContainerData from './MainContainerData';

const MainContainer = ({ results = ['1', '2'] }) => (
  <div>
    <p>{ results.length } results found</p>
    <MainContainerData results={ results }/>
  </div>
);

MainContainer.propTypes = {
  results: PropTypes.array.isRequired,
};


MainContainer.defaultProps = {
  results: ['1', '2'],
};

export default MainContainer;
