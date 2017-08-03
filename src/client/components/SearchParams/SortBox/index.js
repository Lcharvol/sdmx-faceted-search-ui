import React, { Component } from 'react';
import { Collapse } from '@blueprintjs/core';

import './SortBox.css';

class SortBox extends Component {

  state = {
    isOpen: false,
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="sortbox">
        <p className="sortboxtitle">Sort:</p>
        <div className="pt-button-group" onClick={this.handleClick}>
          <a className="pt-button" tabIndex="0" role="button">
            relevance <span className="pt-icon-standard pt-icon-caret-down pt-align-right" />
          </a>
        </div>
        <Collapse isOpen={this.state.isOpen}>
          <pre className="sortboxcontent">
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
          </pre>
        </Collapse>
      </div>
    );
  }
}

export default SortBox;
