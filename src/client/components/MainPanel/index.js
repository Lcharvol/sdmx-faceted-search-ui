import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from '../SearchPanel';
import ResultPanel from '../ResultPanel';

import './MainPanel.css';


const MainPanel = ({ displayShowPanel, size, dataflows, search, searchValue }) => (
  <div className="mainpanel">
    <div style={{ width: `${size}%` }} className="pt-card mainpanel_inner">
      <SearchPanel
        search={search}
      />
      <ResultPanel
        dataflows={dataflows}
        searchValue={searchValue}
        displayShowPanel={displayShowPanel}
      />
    </div>
  </div>);

MainPanel.propTypes = {
  dataflows: PropTypes.array.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default MainPanel;
