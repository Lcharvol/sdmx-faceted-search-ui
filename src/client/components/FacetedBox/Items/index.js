import React from 'react';
import PropTypes from 'prop-types';

import './Items.css';

const Items = ({ name, facetedSearch }) => (
  <div className="items" onClick={() => facetedSearch(name)}>
    <p className="itemsname">{name}</p>
  </div>
);

Items.propTypes = {
  name: PropTypes.string.isRequired,
  facetedSearch: PropTypes.func.isRequired,
};

export default Items;
