import React from 'react';
import PropTypes from 'prop-types';

import './header_right.css';

const HeaderRight = ({ children }) => (
  <div className="header-right-container" >
    {children}
  </div>
);

HeaderRight.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderRight;
