import React from 'react';
import {reassignDefault, defaulAttributesFabrick} from '../helperFunctions';

const defaultProps = {
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
