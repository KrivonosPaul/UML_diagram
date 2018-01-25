import React from 'react';
import {reassignDefault, defaulAttributesFabrick} from '../helperFunctions';

const defaultProps = {
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
