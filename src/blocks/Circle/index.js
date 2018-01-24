import React from 'react';
import {reassignDefault} from '../helperFunctions';

const defaultProps = {
  r: '50',
  cx: '50',
  cy: '50',
  fillOpacity: '1',
  fill: "#ffffff",
  strokeLinejoin: "round",
  strokeLinecap: "round",
  strokeOpacity: '1',
  stroke: "#000000",
  strokeWidth: '1'
};

export default (props) => {
  reassignDefault(defaultProps, props);
  return <circle
  id="SvgjsCircle1062"
  r={defaultProps.r}
  cx={defaultProps.cx} cy={defaultProps.cy}
  fillOpacity={defaultProps.fillOpacity}
  fill={defaultProps.fill}
  strokeLinejoin={defaultProps.strokeLinejoin}
  strokeLinecap={defaultProps.strokeLinecap}
  strokeOpacity={defaultProps.strokeOpacity}
  stroke={defaultProps.stroke}
  strokeWidth={defaultProps.strokeWidth}
  >
</circle>;}
