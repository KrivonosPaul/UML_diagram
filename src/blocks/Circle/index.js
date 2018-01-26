import React from 'react';
import {reassignDefault, defaulAttributesFabrick} from '../helperFunctions';


const defaultProps = {
  id: `circle_${Math.random()*1000+1}`,
  r: '50',
  cx: '50',
  cy: '150',
  ...defaulAttributesFabrick()
};

export default (props) => {
  const newProps = reassignDefault(defaultProps, props);
  return <circle
  {...newProps}>
</circle>;}
