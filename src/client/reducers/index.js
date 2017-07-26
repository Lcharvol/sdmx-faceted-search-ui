import { SEARCH, FILTER, FACETEDSEARCH, MOVESIDEPANEL } from '../actions';
import Data from '../data';


const reducer = (state = Data, action) => {
  switch (action.type) {
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
    case SEARCH:
      return {
        ...state,
        searchValue: action.value,
      };
    default:
      return (state);
  }
};

export default reducer;
