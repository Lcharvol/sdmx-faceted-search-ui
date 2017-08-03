import React from 'react';
import PropTypes from 'prop-types';

import './SearchInfo.css';

const SearchInfo = ({ dataflows, searchValue, searchsize }) => (
  <div className="searchinfo">
    {searchValue && <p>{searchsize} results for {searchValue}</p>}
    {!searchValue && <p>{dataflows.length} products available</p>}
  </div>
);

SearchInfo.propTypes = {
  dataflows: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  searchsize: PropTypes.number.isRequired,
};

export default SearchInfo;
