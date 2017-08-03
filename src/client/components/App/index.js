import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSearchBarInput } from '../../actions';


import './App.css';
import SidePanel from '../SidePanel';
import Container from '../Container';

const resultsFilter = (resultList, keyWord) =>
  resultList.filter(item => item.value.match(keyWord.toLowerCase()) !== null);

class App extends Component {
  state = {
    isHidden: true,
  }

  showOverlayPanel = () => {
    this.setState(({ isHidden }) => ({ isHidden: !isHidden }));
  };

  searchHandler = ({ target: { value } }) => {
    const { getSearchBarInput: get_search_bar_input } = this.props;
    get_search_bar_input(value);
  };

  render() {
    const { isHidden } = this.state;
    const { title, langs, resultItems, searchValue } = this.props;
    return (
      <div className="app-container">
        <div>
          <SidePanel isHidden={isHidden} />
          <Container
            title={title}
            langs={langs}
            resultItems={resultItems}
            showOverlayPanel={this.showOverlayPanel}
            isHidden={isHidden}
            searchHandler={this.searchHandler}
            searchValue={searchValue}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.title,
  langs: state.langs,
  resultItems: resultsFilter(state.resultItems, state.searchValue),
  getSearchBarInput: state.getSearchBarInput,
  searchValue: state.searchValue,
});

const mapDispatchToProps = dispatch => ({ getSearchBarInput: (value) => dispatch(getSearchBarInput(value)) });

App.propTypes = {
  title: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
  resultItems: PropTypes.array.isRequired,
  getSearchBarInput: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
