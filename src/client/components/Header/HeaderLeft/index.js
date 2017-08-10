import React from 'react';
import PropTypes from 'prop-types';

import './header_left.css';

const HeaderLeft = ({ children }) => (
  <div className="header-left-container" >
    {children}
  </div>
);

HeaderLeft.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderLeft;
