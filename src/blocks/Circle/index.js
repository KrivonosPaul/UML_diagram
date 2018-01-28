import React from 'react';
import {reassignDefault, defaulAttributesEventHandlers} from '../helperFunctions';


const defaultProps = {
  r: '50',
  cx: '50',
  cy: '150',
  ...defaulAttributesEventHandlers()
};

export default (props) => {
  const newProps = reassignDefault(defaultProps, props);
  return <circle
  {...newProps}>
</circle>;}
