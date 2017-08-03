import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

import './SearchPanel.css';

const SearchPanel = ({ search }) => (
  <div className="searchpanel">
    <SearchBar
      search={search}
    />
    <SearchButton
      startSearch={this.startClickSearch}
    />
  </div>
);

SearchPanel.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchPanel;
