import React from 'react';
import {reassignDefault, defaulAttributesEventHandlers} from '../helperFunctions';

const defaultProps = {
  width: '90',
  height: '90',
  x: '5',
  y: '5',
  // ...defaulAttributesEventHandlers()
};

export default (props) => {
  const newProps = reassignDefault(defaultProps, props);
  return <rect {...newProps}></rect>;
}
