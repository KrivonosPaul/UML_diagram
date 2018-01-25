import React from 'react';
import {reassignDefault} from '../helperFunctions';
import {DEFAUL_ATTRIBUTES} from '../constants';

const defaultProps = {
  width: '90',
  height: '90',
  x: '5',
  y: '5',
  ...DEFAUL_ATTRIBUTES
};

export default (props) => {
  reassignDefault(defaultProps, props);
  return <rect
  {...defaultProps}>
</rect>;}
