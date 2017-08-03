import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';

import './SearchBar.css';


const SearchBar = ({ handleInput }) => (
  <div className="searchbarcontainer">
    <input
      onChange={handleInput}
      className="pt-input pt-fill"
      placeholder="Search"
      type="text"
    />
  </div>
);

SearchBar.propTypes = {
  handleInput: PropTypes.func.isRequired,
};

export default withHandlers({
  handleInput: ({ search }) => event => {
    event.preventDefault();
    search(event.target.value);
  },
})(SearchBar);
