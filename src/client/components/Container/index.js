import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ title, dataflows, language, showSidePanel, displayShowPanel, search, searchValue }) => (
  <div className="container">
    <Header
      title={title}
      language={language}
      showSidePanel={showSidePanel}
      displayShowPanel={displayShowPanel}
    />
    <Media query={{ maxWidth: 599 }}>
      {matches => matches ? (
        <MainPanel
          size="100"
          dataflows={dataflows}
          displayShowPanel={displayShowPanel}
          search={search}
          searchValue={searchValue}
        />
            ) : (
              <MainPanel
                size="80"
                dataflows={dataflows}
                displayShowPanel={displayShowPanel}
                search={search}
                searchValue={searchValue}
              />
            )}
    </Media>

  </div>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  dataflows: PropTypes.array.isRequired,
  language: PropTypes.array.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default Container;
