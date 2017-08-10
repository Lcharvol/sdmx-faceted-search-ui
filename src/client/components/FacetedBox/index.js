import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';

import './FacetedBox.css';

const FacetedBox = ({ name }) => (
  <div className="pt-card pt-elevation-0 facetedbox">
    <p className="facetedboxname">{name}</p>
  </div>
);

FacetedBox.propTypes = {
  name: PropTypes.string.isRequired,
};

export default onlyUpdateForKeys(['name', 'facets'])(FacetedBox);
