import React from 'react';
import {reassignDefault} from '../helperFunctions';
import {DEFAUL_ATTRIBUTES} from '../constants';

const defaultProps = {
  r: '50',
  cx: '50',
  cy: '150',
  ...DEFAUL_ATTRIBUTES
};

export default (props) => {
  reassignDefault(defaultProps, props);
  return <circle
  {...defaultProps}>
</circle>;}
