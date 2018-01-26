import React, {Component} from 'react';
import { connect } from 'react-redux';

import Rectangle from '../blocks/Rectangle';
import Circle from '../blocks/Circle';
import Ellipse from '../blocks/Ellipse';
import ConnectingLine from '../blocks/ConnectingLine';
import {randomId} from '../blocks/helperFunctions';
import {toggleEditing} from './actions';

const SVG_CANVAS_ID = 'mainSVGCanvas';
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
  prepared.properties = {...prepared.properties, ...element.properties}
  return prepared;
};

const mapStateToProps = (state) => {
  return {
    blocks: state.blocks
  }
};

const mapDispatchToProps = (dispatch) => ({
  toggleEditing: (elementId) => dispatch(toggleEditing(elementId))
});

class SvgCanvas extends Component {
  constructor(props) {
    super(props);
    this.width = document.documentElement.clientWidth;// window.innerWidth;
    this.height = document.documentElement.clientHeight;// window.innerHeight;

    this.closeDashboard = this.closeDashboard.bind(this);
  }

  closeDashboard(evt){
    if(evt.target.id !== SVG_CANVAS_ID) {
      this.props.toggleEditing(evt.target.id);
    } else {
      this.props.toggleEditing();
    }
  }

  render() {
    return (
      <svg id={SVG_CANVAS_ID} width={this.width} height={this.height} onClick={this.closeDashboard}>
        {this.props.blocks.map((element)=>{
          const Element = blockElements(element);
          return <Element.component
            key={element.properties.id}
            {...Element.properties}
            />
        })}
      </svg>
    );
  }
}
SvgCanvas.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(SvgCanvas);
