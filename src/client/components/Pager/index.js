import React from 'react';

import './Pager.css';

const Pager = () => (
  <div className="pager_container">
    <div className="pager_container_inner">
      <div className="first">First</div>
      <div className="pager_elem prev">
        <span className="pt-icon-standard pt-icon-double-chevron-left" />
      </div>
      <div className="pager_elem">1</div>
      <div className="pager_elem">2</div>
      <div className="pager_elem">3</div>
      <div className="pager_elem next">
        <span className="pt-icon-standard pt-icon-double-chevron-right" />
      </div>
      <div className="last">Last</div>
    </div>
  </div>
);

export default Pager;
