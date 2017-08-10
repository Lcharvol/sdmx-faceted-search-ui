import { FILTER, FACETEDSEARCH, MOVESIDEPANEL,
  GETFACETEDBOXS, GETDATAFLOW, RESETDATAFLOW, SEARCH } from '../actions';


const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchValue: action.value,
      };
    case RESETDATAFLOW:
      return {
        ...state,
        dataflows: [],
      };
    case GETDATAFLOW:
      return {
        ...state,
        dataflows: action.data.data.dataflows,
      };
    case GETFACETEDBOXS:
      return {
        ...state,
        facetedbox: action.data.data.facets,
      };
    case FILTER:
      return {
        ...state,
        filterValue: action.value,
      };
    case FACETEDSEARCH:
      return {
        ...state,
        facetedValue: action.value,
      };
    case MOVESIDEPANEL:
      return {
        ...state,
        showSidePanel: !state.showSidePanel,
      };
    default:
      return (state);
  }
};

export default reducer;
