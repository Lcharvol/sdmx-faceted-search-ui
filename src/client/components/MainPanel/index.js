import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from '../SearchPanel';
import ResultPanel from '../ResultPanel';
import Pager from '../Pager';

import './MainPanel.css';


const MainPanel = ({ displayShowPanel, dataflows, handleSearch, searchValue }) => (
  <div className="mainpanel">
    <div className="pt-card mainpanel_inner">
      <SearchPanel
        handleSearch={handleSearch}
      />
      <ResultPanel
        dataflows={dataflows}
        displayShowPanel={displayShowPanel}
        searchValue={searchValue}
      />
      <Pager />
    </div>
  </div>);

MainPanel.propTypes = {
  displayShowPanel: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  dataflows: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default MainPanel;
