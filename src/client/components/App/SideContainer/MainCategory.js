import React from 'react';

import SubCategory from './SubCategory';

const MainCategory = ({ titleName }) => (
  <ul>
    { titleName }
    <SubCategory />
  </ul>
);

export default MainCategory;
