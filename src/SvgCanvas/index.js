import React, {Component} from 'react';
import { connect } from 'react-redux';

import Rectangle from '../blocks/Rectangle';
import Circle from '../blocks/Circle';
import Ellipse from '../blocks/Ellipse';
import ConnectingLine from '../blocks/ConnectingLine';
import {randomId} from '../blocks/helperFunctions';

const blockElements = (element) => {
  const elementObject = {
    rect: {
            component: Rectangle,
            properties: {
              x:15,
              y:73,
            }
          },
    circle: {
            component: Circle,
            properties: {
              cx:60,
              cy:218,
            }
          },
    ellipse: {
            component: Ellipse,
            properties: {
              cx:60,
              cy:303,
            }
          }
  }
  const prepared = elementObject[element.nodeName];
  prepared.properties.isdragging = 'true';
  prepared.properties.transx = element.point.x;
  prepared.properties.transy = element.point.y;
  prepared.properties.id = element.id;
  return prepared;
};

const mapStateToProps = (state) => {
  return {
    blocks: state.blockStore.blocks
  }
};

const mapDispatchToProps = (dispatch) => ({
});

class SvgCanvas extends Component {
  constructor(props) {
    super(props);
    this.width = document.documentElement.clientWidth;// window.innerWidth;
    this.height = document.documentElement.clientHeight;// window.innerHeight;
  }
  render() {
    return (
      <svg id="mainSVGCanvas" width={this.width} height={this.height}>
        {this.props.blocks.map((element)=>{
          const Element = blockElements(element);
          return <Element.component key={Element.properties.id} {...Element.properties}/>
        })}
      </svg>
    );
  }
}
SvgCanvas.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(SvgCanvas);
