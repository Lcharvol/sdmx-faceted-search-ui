import axios from 'axios';
import params from '../../params';

export const HANDLESEARCH = 'HANDLESEARCH';
export const FILTER = 'FILTER';
export const FACETEDSEARCH = 'FACETEDSEARCH';
export const MOVESIDEPANEL = 'SHOWSIDEPANEL';
export const GETFACETEDBOXS = 'GETFACETEDBOXS';
export const GETDATAFLOW = 'GETDATAFLOW';
export const RESETDATAFLOW = 'RESETDATAFLOW';
export const SEARCH = 'SEARCH';

export const filter = value => ({ type: FILTER, value });
export const facetedSearch = value => ({ type: FACETEDSEARCH, value });
export const moveSidePanel = () => ({ type: MOVESIDEPANEL });

const { server: { host, port } } = params;

export const getTheSearch = (value) => axios.post(`http://${host}:${port}/api/search`, { search: value });

export const search = value => ({ type: SEARCH, value });

export const handleSearch = (value) => dispatch => {
  dispatch(search(value));
  if (!value) {
    return dispatch({ type: RESETDATAFLOW });
  }
  return getTheSearch(value)
  .then(data => { console.log(data); dispatch({ type: GETDATAFLOW, data }); });
};

export const getFacetedBoxs = () => dispatch => (
  getTheSearch('')
  .then(data => dispatch({ type: GETFACETEDBOXS, data }))
);
