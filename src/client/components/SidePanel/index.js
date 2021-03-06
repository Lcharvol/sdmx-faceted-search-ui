import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import BurgerButton from './BurgerButton';

import './SidePanel.css';


const SidePanel = ({ showSidePanel, moveSidePanel }) => (
  <Motion style={{ x: spring(showSidePanel ? -240 : 0), y: spring(showSidePanel ? 300 : 250) }}>
    {({ x, y }) =>
      (<div
        style={{
          marginLeft: `${x}px`,
          minWidth: `${y}px`,
        }}
        className="sidepanel"
      >
        {showSidePanel && <BurgerButton
          displayShowPanel={moveSidePanel}
        />}
        {!showSidePanel && <div onClick={moveSidePanel} className="crosscontainer">
          <span className="pt-icon-large pt-icon-cross" />
        </div>}
      </div>)
  }
  </Motion>
);

SidePanel.propTypes = {
  showSidePanel: PropTypes.bool.isRequired,
  moveSidePanel: PropTypes.func.isRequired,
};

export default SidePanel;
