import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';

import './DataFlow.css';

const DataFlow = ({ data }) => (
  <div className="pt-card pt-elevation-0 dataflowcontainer">
    <p className="name">Name: </p>
    <p>{data.name}</p>
    <p className="id">ID: </p>
    <p>{data.id}</p>
  </div>
);

DataFlow.propTypes = {
  data: PropTypes.object.isRequired,
};

export default onlyUpdateForKeys(['data', 'direction'])(DataFlow);
