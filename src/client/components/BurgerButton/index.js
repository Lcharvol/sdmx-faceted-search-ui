import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import './BurgerButton.css';

const BurgerButton = ({ displayShowPanel }) => (
  <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      displayShowPanel();
    }}
    className="pt-button pt-intent-primary pt-icon-menu burgerbutton"
  >
    Affine
  </button>
);

BurgerButton.propTypes = {
  displayShowPanel: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys(['displayShowPanel'])(BurgerButton);
