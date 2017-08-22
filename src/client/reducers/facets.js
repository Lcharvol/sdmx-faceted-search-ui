import { reduce, toPairs, omit } from 'ramda';
import { CONFIGLOADED } from '../actions/config';
import { DATAFLOWSLOADED, SEARCH } from '../actions/dataflows';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH:
      if (!action.facets) return state;
      return reduce((acc, [name, value]) => ({ ...acc, [name]: { ...state[name], value } }), state, toPairs(action.facets));
    case CONFIGLOADED:
      return action.facets;
    case DATAFLOWSLOADED:
      return reduce((acc, [name, v]) => ({ ...acc, [name]: { ...state[name], buckets: v.buckets } }), state, toPairs(omit(['count'], action.facets)));
    default:
      return state;
  }
};

export default reducer;
