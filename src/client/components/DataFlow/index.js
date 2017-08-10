import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { Popover, Position, PopoverInteractionKind } from '@blueprintjs/core';

import './DataFlow.css';

const DataFlow = ({ data }) => (
  <Popover
    content={
      <div className="popover_container">
        <p>coucou</p>
      </div>
    }
    target={
      <div className="pt-card pt-elevation-0 pt-interactive dataflowcontainer">
        <p className="name">{data.name}</p>
        <p className="id">{data.id}</p>
      </div>
    }
    position={Position.BOTTOM}
    interactionKind={PopoverInteractionKind.HOVER}
    openOnTargetFocus
  />
);

DataFlow.propTypes = {
  data: PropTypes.object.isRequired,
};

export default onlyUpdateForKeys(['data', 'direction'])(DataFlow);
