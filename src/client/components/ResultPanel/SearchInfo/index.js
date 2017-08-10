import React from 'react';
import PropTypes from 'prop-types';
import DisplayBox from './DisplayBox';

import './SearchInfo.css';

const SearchInfo = ({ dataflows, searchValue, searchsize }) => (
  <div className="searchinfo">
    {searchValue && <p>{searchsize} results for {searchValue}</p>}
    {!searchValue && <p>{dataflows.length} products available</p>}
    <DisplayBox />
  </div>
);

SearchInfo.propTypes = {
  dataflows: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  searchsize: PropTypes.number.isRequired,
};

export default SearchInfo;
