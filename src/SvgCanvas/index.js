import React from 'react';

import Rectangle from '../blocks/Rectangle';
import Circle from '../blocks/Circle';
import Ellipse from '../blocks/Ellipse';
import ConnectingLine from '../blocks/ConnectingLine'

let num = 0;
const getNextKey = () => {
  console.log(num);
  return num++;
}
const width = document.documentElement.clientWidth;// window.innerWidth;
const height = document.documentElement.clientHeight;// window.innerHeight;
export default (props) => <svg id="mainSVGCanvas" width={width} height={height}>
  {props.blocks.map((element)=>{
    return <element.component key={element.properties.id} {...element.properties}/>
  })}
</svg>;
