import React from 'react';
import PropTypes from 'prop-types';

const HeaderLangSelector = ({ langs }) => (
  <span>
    <select>
      { langs.map((lang, id) => <option key={id}>{lang}</option>) }
    </select>
  </span>
);

HeaderLangSelector.propTypes = {
  langs: PropTypes.array.isRequired,
};

export default HeaderLangSelector;
