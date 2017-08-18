import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ dataflows, currentLanguage, searchData, sidePanelIsVisible, displayShowPanel, search, langs, setLocale }) => (
  <div className="container">
    <Header
      langs={langs}
      setLocale={setLocale}
      currentLanguage={currentLanguage}
      sidePanelIsVisible={sidePanelIsVisible}
      displayShowPanel={displayShowPanel}
    />
    <MainPanel
      dataflows={dataflows}
      displayShowPanel={displayShowPanel}
      searchData={searchData}
      search={search}
    />
  </div>
);

Container.propTypes = {
  langs: PropTypes.array,
  setLocale: PropTypes.func,
  currentLanguage: PropTypes.string,
  dataflows: PropTypes.array.isRequired,
  sidePanelIsVisible: PropTypes.bool,
  displayShowPanel: PropTypes.func.isRequired,
  searchData: PropTypes.object,
  search: PropTypes.func.isRequired,
};

export default Container;
