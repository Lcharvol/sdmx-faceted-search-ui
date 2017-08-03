import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import FacetedBox from '../FacetedBox';
import FilterBox from '../FilterBox';

import './SidePanel.css';


const SidePanel = ({ facetedbox, filterbox, showSidePanel, moveSidePanel, behavior, filter, facetedSearch }) => (
  <Motion style={{ x: spring(showSidePanel ? -240 : 0) }}>
    {({ x }) =>
      (<div
        style={{
          marginLeft: `${x}px`,
          position: behavior,
        }}
        className="sidepanel"
      >
        <div onClick={moveSidePanel} className="crosscontainer">
          <span className="pt-icon-large pt-icon-cross" />
        </div>
        {facetedbox.map(facetedelem => (
          <FacetedBox
            key={facetedelem.id}
            name={facetedelem.name}
            facets={facetedelem.facets}
            facetedSearch={facetedSearch}
          />
    ))}
        {filterbox.map(filterelem => (
          <FilterBox
            key={filterelem.id}
            name={filterelem.name}
            filters={filterelem.filtres}
            filter={filter}
          />
    ))}
      </div>)
  }
  </Motion>
);

SidePanel.propTypes = {
  facetedbox: PropTypes.array.isRequired,
  filterbox: PropTypes.array.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  behavior: PropTypes.string.isRequired,
  moveSidePanel: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  facetedSearch: PropTypes.func.isRequired,
};

export default SidePanel;
