import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import LanguageSelector from '../LanguageSelector';
import './Header.css';

const Header = ({ title, languages }) => (
  <nav className="pt-navbar pt-intent-success header">
    <div className="pt-navbar-group pt-align-left">
      <div className="logo">
        <i className="fa fa-paper-plane" aria-hidden="true" />
      </div>
      <div className="pt-navbar-heading">{ title }</div>
    </div>
    <div className="pt-navbar-group pt-align-right">
      <LanguageSelector
        languages={languages}
      />
    </div>
  </nav>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
};

export default onlyUpdateForKeys(['language'])(Header);
