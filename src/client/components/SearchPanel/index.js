import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

import './SearchPanel.css';

const SearchPanel = ({ Search }) => (
  <div className="searchpanel">
    <SearchBar
      Search={Search}
    />
    <SearchButton
      startSearch={this.startClickSearch}
    />
=======

import './search_panel.css';
import SearchBar from '../SearchBar';

const SearchPanel = ({ getSearchValue }) => (
  <div className="search-panel-container">
    <SearchBar getSearchValue={getSearchValue} />
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
  </div>
);

SearchPanel.propTypes = {
<<<<<<< HEAD
  Search: PropTypes.func.isRequired,
=======
  getSearchValue: PropTypes.func.isRequired,
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
};

export default SearchPanel;
