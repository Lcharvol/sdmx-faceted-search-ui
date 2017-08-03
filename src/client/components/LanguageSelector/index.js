import React, { Component } from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { Button, Collapse } from '@blueprintjs/core';
import PropTypes from 'prop-types';

import './LanguageSelector.css';

class LanguageSelector extends Component {
  state = {
    isOpen: false,
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { language } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="languageselector">
        <Button onClick={this.handleClick}>
          {language[0].name}
        </Button>
        <Collapse isOpen={isOpen}>
          <pre>
            Fr
          </pre>
          <pre>
            En
          </pre>
        </Collapse>
      </div>
    );
  }
}

LanguageSelector.propTypes = {
  language: PropTypes.array.isRequired,
};

export default onlyUpdateForKeys(['language'])(LanguageSelector);
