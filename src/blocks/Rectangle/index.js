import React from 'react';
import {reassignDefault, defaulAttributesFabrick} from '../helperFunctions';

const defaultProps = {
  id: `rect_${Math.random()*1000+1}`,
  width: '90',
  height: '90',
  x: '5',
  y: '5',
  ...defaulAttributesFabrick()
};

export default (props) => {
  const newProps = reassignDefault(defaultProps, props);
  console.log('props for rect: ', newProps);
  return <rect
  {...newProps}>
  </rect>;
}
