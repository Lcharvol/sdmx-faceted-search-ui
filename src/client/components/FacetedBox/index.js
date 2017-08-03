import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import Items from './Items';

import './FacetedBox.css';

const FacetedBox = ({ name, facets, facetedSearch }) => (
  <div className="pt-card pt-elevation-0 facetedbox">
    <p className="facetedboxname">{name}</p>
    {facets.map((fa) => (
      <Items
        key={fa.id}
        name={fa.name}
        facetedSearch={facetedSearch}
      />
    ))}
  </div>
);

FacetedBox.propTypes = {
  name: PropTypes.string.isRequired,
  facets: PropTypes.array.isRequired,
  facetedSearch: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys(['name', 'facets'])(FacetedBox);
