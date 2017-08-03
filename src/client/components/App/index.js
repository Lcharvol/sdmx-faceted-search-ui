import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import Container from '../Container';
import SidePanel from '../SidePanel';
import { search, filter, facetedSearch, moveSidePanel } from '../../actions';
import './App.css';

const App = ({ facetedbox, filterbox, title, searchValue,
  language, dataflows, showSidePanel, facetedSearch: doFacetedSearch, filter: doFilter, search: doSearch, moveSidePanel: doMoveSidePanel }) => (
    <div className="App">
      <Media query="(max-width: 599px)">
        {matches => matches ? (
          <SidePanel
            facetedbox={facetedbox}
            filterbox={filterbox}
            showSidePanel={showSidePanel}
            moveSidePanel={doMoveSidePanel}
            behavior="absolute"
            filter={doFilter}
            FacetedSearch={doFacetedSearch}
          />
         ) : (
           <SidePanel
             facetedbox={facetedbox}
             filterbox={filterbox}
             showSidePanel={showSidePanel}
             moveSidePanel={doMoveSidePanel}
             behavior="relative"
             filter={doFilter}
             facetedSearch={doFacetedSearch}
           />
         )}
      </Media>
      <Container
        title={title}
        dataflows={dataflows}
        search={doSearch}
        searchValue={searchValue}
        language={language}
        showSidePanel={showSidePanel}
        displayShowPanel={doMoveSidePanel}
      />
    </div>
);

App.propTypes = {
  facetedbox: PropTypes.array.isRequired,
  filterbox: PropTypes.array.isRequired,
  dataflows: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  language: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  facetedSearch: PropTypes.func.isRequired,
  moveSidePanel: PropTypes.func.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
};

const getDataFlows = state => state.dataflows;
const getFilterValue = state => state.filterValue;
const getFacetedValue = state => state.facetedValue;
const getSearchValue = state => state.searchValue;

const filterDataFlows = createSelector(
  [getDataFlows, getFilterValue, getFacetedValue, getSearchValue],
  (dataflows, filterValue, facetedValue, searchValue) => {
    let newDataflows = dataflows;
    if (facetedValue && facetedValue !== 'All') {
      newDataflows = newDataflows.filter((li) => (li.Categories === facetedValue));
    }
    if (!searchValue && (!filterValue || filterValue === 'All')) {
      return newDataflows;
    } else if (searchValue && (!filterValue || filterValue === 'All')) {
      return newDataflows.filter((li) => (li.Name.toLowerCase().match(searchValue.toLowerCase())));
    } else if (filterValue && searchValue) {
      return newDataflows.filter((li) => (li.Name.toLowerCase().match(searchValue.toLowerCase()) && filterValue === li.Type));
    } else if (!searchValue && (filterValue && filterValue !== 'All')) {
      return newDataflows.filter((li) => (filterValue === li.Type));
    }
  },
);

const actions = { search, filter, facetedSearch, moveSidePanel };

const mapStateToProps = state => ({
  title: state.title,
  facetedbox: state.facetedbox,
  filterbox: state.filterbox,
  language: state.language,
  dataflows: filterDataFlows(state),
  searchValue: state.searchValue,
  filterValue: state.filterValue,
  facetedValue: state.facetedValue,
  showSidePanel: state.showSidePanel,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
