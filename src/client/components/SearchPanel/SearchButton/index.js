import React from 'react';
import { AnchorButton } from '@blueprintjs/core';

import './SearchButton.css';

const SearchButton = () => (
  <div className="searchbuttoncontainer">
    <AnchorButton text="Search" iconName="search" className="searchbutton" />
  </div>
);

export default SearchButton;
