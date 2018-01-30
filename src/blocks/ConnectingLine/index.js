import React from 'react';
import {defaultLineProps} from '../defaultProperties';
import {reassignDefault} from '../helperFunctions';

export default (props) => {
  const newProps = reassignDefault(defaultLineProps, props);
  return <line {...newProps}></line>
}

// markerEnd='url(#markerArrow)'
// <Fragment>
//   <defs>
//     <marker id={"markerArrow"} markerWidth={"13"} markerHeight={"13"} refX={"2"} refY={"6"} orient={"auto"} markerUnits={"userSpaceOnUse"}>
//       <path d={"M2,2 L2,11 L10,6 L2,2"} fill={props.fill||'#000000'} />
//     </marker>
//   </defs>
// </Fragment>;
