import React from 'react';

import Rectangle from '../blocks/Rectangle';
import Circle from '../blocks/Circle';
import Ellipse from '../blocks/Ellipse';
import ConnectingLine from '../blocks/ConnectingLine'

const width = document.documentElement.clientWidth;// window.innerWidth;
const height = document.documentElement.clientHeight;// window.innerHeight;
export default (props) => <svg width={width} height={height}>
<Rectangle x="300" y="300" stroke={'green'} />

</svg>;

/*
<Rectangle x="300" y="300" stroke={'green'} />
<Circle cx="500" cy="500" stroke={'blue'} />
<Ellipse cx="200" cy="200" stroke={'red'} />
*/
