import React from 'react';
import PropTypes from 'prop-types';

const MainContainerData = ({ results }) => (
  <ul>
    { results.map((result, id) => <li key={ id }>{ result }</li>) }
  </ul>
);

MainContainerData.propTypes = {
  results: PropTypes.array.isRequired,
};

export default MainContainerData;
