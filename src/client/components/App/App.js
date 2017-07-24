import React, { Component } from 'react';

import Header from './Header/';
import SearchContainer from './Search/';
import SideContainer from './SideContainer/';
import MainContainer from './MainContainer/';

// import logo from '../../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchContainer />
        <SideContainer />
        <MainContainer />
      </div>
    );
  }
}

export default App;
