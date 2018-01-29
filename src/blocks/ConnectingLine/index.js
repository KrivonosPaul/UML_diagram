import React, {Fragment} from 'react';

export default (props) =>
<Fragment>
  <defs>
    <marker id={"markerArrow"} markerWidth={"13"} markerHeight={"13"} refX={"2"} refY={"6"} orient={"auto"} markerUnits={"userSpaceOnUse"}>
      <path d={"M2,2 L2,11 L10,6 L2,2"} fill={props.fill||'#000000'} />
    </marker>
  </defs>
  <line
    id="SvgjsLine1088"
    x1={"10"} y1="50"
    x2="80" y2="50"
    strokeLinejoin="round"
    strokeLinecap="round"
    strokeOpacity="1"
    stroke="#000000"
    strokeWidth="2"
    markerEnd='url(#markerArrow)'>
  </line>
</Fragment>;


// import React, {Fragment} from 'react';
// import {reassignDefault, defaulAttributesEventHandlers} from '../helperFunctions';
//
// const defaultProps = {
//   width: '90',
//   height: '90',
//   x: '5',
//   y: '5',
//   // ...defaulAttributesEventHandlers()
// };
//
//
// export default (props) => {
//   const newProps = reassignDefault(defaultProps, props);
//   const textProps = {
//     textAnchor: 'middle',
//     x: parseInt(newProps.x) + newProps.width/2,
//     y: parseInt(newProps.y) + newProps.height/2,
//     stroke: newProps.stroke,
//     id: `${newProps.id}_text`
//   };
//   if (newProps.transform) {
//     textProps.transform = newProps.transform;
//   }
//   const textContent = newProps.text ? newProps.text : '';
//   delete newProps.text;
//   return <Fragment><rect {...newProps}></rect><text {...textProps}>{textContent}</text></Fragment>;
// }
