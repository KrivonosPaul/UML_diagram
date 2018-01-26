import React from 'react';
import {reassignDefault, defaulAttributesFabrick} from '../helperFunctions';

const defaultProps = {
  id: `ellipse_${Math.random()*1000+1}`,
  rx: '50',
  ry: '30',
  cx: '50',
  cy: '235',
  ...defaulAttributesFabrick()
};

export default (props) => {
  const newProps = reassignDefault(defaultProps, props);
  return <ellipse
  {...newProps}>
</ellipse>;}
