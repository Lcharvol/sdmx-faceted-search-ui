import React from 'react';
import PropTypes from 'prop-types';

const HeaderTitle = ({ titleName }) => (
  <h2>{ titleName }</h2>
);

HeaderTitle.propTypes = {
  titleName: PropTypes.string.isRequired,
};

export default HeaderTitle;
