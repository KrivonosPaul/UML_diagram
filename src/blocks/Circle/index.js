import React, {Fragment} from 'react';
import {reassignDefault, defaulAttributesEventHandlers} from '../helperFunctions';


const defaultProps = {
  r: '50',
  cx: '50',
  cy: '150',
  // ...defaulAttributesEventHandlers()
};

export default (props) => {
  const newProps = reassignDefault(defaultProps, props);
  const textProps = {
    textAnchor: 'middle',
    x: newProps.cx,
    y: newProps.cy,
    stroke: newProps.stroke,
    id: `${newProps.id}_text`
  };
  if (newProps.transform) {
    textProps.transform = newProps.transform;
  }
  const textContent = newProps.text ? newProps.text : '';
  delete newProps.text;
  return <Fragment><circle {...newProps}></circle><text {...textProps}>{textContent}</text></Fragment>;
}
