import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';
import { getFacetedBoxs } from './actions';

const initialState = {
  showSidePanel: false,
  searchValue: '',
  facetedValue: '',
  filterValue: '',
  title: 'SDMX Faceted Search',
  languages: [
    {
      id: 0,
      name: 'En',
    },
    {
      id: 1,
      name: 'Cz',
    },
    {
      id: 2,
      name: 'Fr',
    },
  ],
  dataflows: [],
  facetedbox: {},
  filterbox: [],
};

const store = configureStore(initialState);

store.dispatch(getFacetedBoxs());

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
