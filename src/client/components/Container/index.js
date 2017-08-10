import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ title, dataflows, searchValue, languages, showSidePanel, displayShowPanel, handleSearch }) => (
  <div className="container">
    <Header
      title={title}
      languages={languages}
      showSidePanel={showSidePanel}
      displayShowPanel={displayShowPanel}
    />
    <MainPanel
      dataflows={dataflows}
      displayShowPanel={displayShowPanel}
      handleSearch={handleSearch}
      searchValue={searchValue}
    />
  </div>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  dataflows: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default Container;
