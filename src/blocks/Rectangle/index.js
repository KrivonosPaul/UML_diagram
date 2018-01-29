import React, {Fragment} from 'react';
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
  const textProps = {
    textAnchor: 'middle',
    x: parseInt(newProps.x) + newProps.width/2,
    y: parseInt(newProps.y) + newProps.height/2,
    stroke: newProps.stroke,
    id: `${newProps.id}_text`
  };
  if (newProps.transform) {
    textProps.transform = newProps.transform;
  }
  return <Fragment><rect {...newProps}></rect><text {...textProps}>TEXT</text></Fragment>;
}
