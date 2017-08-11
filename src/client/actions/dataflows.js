import { requestJson } from '../utils';

export const DATAFLOWSLOADED = 'DATAFLOWSLOADED';
export const SEARCH = 'SEARCH';

const dataflowsLoaded = dataflows => ({
  type: DATAFLOWSLOADED,
  dataflows,
});

export const search = value => dispatch => {
  requestJson({ dispatch, method: 'post', url: '/api/search', body: { search: value } })
    .then(data => dispatch(dataflowsLoaded(data.dataflows)));
};

