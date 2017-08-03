import React from 'react';
import PropTypes from 'prop-types';
import Filtre from './Filtre';
import './FilterBox.css';

const FilterBox = ({ name, filters, filter }) => (
  <div className="pt-card pt-elevation-0 filterbox">
    <p className="filterboxname">{name}</p>
    {filters.map((fil) => (
      <Filtre
        key={fil.id}
        filter={fil.name}
        filterFunc={filter}
      />
    ))}
  </div>
);

FilterBox.propTypes = {
  name: PropTypes.string.isRequired,
  filters: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
};

Filtre.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default FilterBox;
