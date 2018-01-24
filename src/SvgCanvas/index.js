import React from 'react';

import Rectangle from '../blocks/Rectangle';
import Circle from '../blocks/Circle';
import Ellipse from '../blocks/Ellipse';
import ConnectingLine from '../blocks/ConnectingLine'

const width = document.documentElement.clientWidth;//window.innerWidth;
const height = document.documentElement.clientHeight;// window.innerHeight;
export default (props) => <svg width={width} height={height}>
  <Rectangle />
  <Circle stroke={'red'}/>
  <Ellipse />
  <ConnectingLine />
</svg>;
