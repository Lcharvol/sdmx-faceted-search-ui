import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';

const Title = ({ name }) => (
  <div className="title">
    <h1>{name}</h1>
  </div>
);

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default onlyUpdateForKeys(['name'])(Title);
