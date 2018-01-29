import React, {Fragment} from 'react';
import {reassignDefault} from '../helperFunctions';

const defaultProps = {
  rx: '50',
  ry: '30',
  cx: '50',
  cy: '235'
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
  return <Fragment><ellipse  {...newProps}></ellipse><text {...textProps}>{textContent}</text></Fragment>;}
