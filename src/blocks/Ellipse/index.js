import React from 'react';
import {reassignDefault} from '../helperFunctions';
import {DEFAUL_ATTRIBUTES} from '../constants';

const defaultProps = {
  rx: '50',
  ry: '30',
  cx: '50',
  cy: '235',
  ...DEFAUL_ATTRIBUTES
};

export default (props) => {
  reassignDefault(defaultProps, props);
  return <ellipse
  {...defaultProps}>
</ellipse>;}
