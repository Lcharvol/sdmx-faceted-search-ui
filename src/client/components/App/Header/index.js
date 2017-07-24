import React from 'react';

import HeaderTitle from './HeaderTitle';
import HeaderLangSelector from './HeaderLangSelector';

const Header = () => (
  <div>
    <HeaderTitle titleName='RedPelican' />
    <HeaderLangSelector langs={['France', 'canada']} />
  </div>
);

export default Header;
