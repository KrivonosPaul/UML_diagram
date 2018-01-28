import React, {Component} from 'react';
import { connect } from 'react-redux';

import Rectangle from '../blocks/Rectangle';
import Circle from '../blocks/Circle';
import Ellipse from '../blocks/Ellipse';
import ConnectingLine from '../blocks/ConnectingLine';
import {randomId} from '../blocks/helperFunctions';
import {toggleEditing, mouseDownOnSVG, mouseMoveOnSVG, mouseUpOnSVG} from './actions';

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
  toggleEditing: (elementId) => dispatch(toggleEditing(elementId)),
  mouseDownOnSVG: (elementId) => dispatch(mouseDownOnSVG(elementId)),
  mouseMoveOnSVG: (elementId) => dispatch(mouseMoveOnSVG(elementId)),
  mouseUpOnSVG: (elementId) => dispatch(mouseUpOnSVG(elementId))
});

class SvgCanvas extends Component {
  constructor(props) {
    super(props);
    this.toggleDashboard = this.toggleDashboard.bind(this);
    this.mouseDownOnSVG = this.mouseDownOnSVG.bind(this);
    this.mouseMoveOnSVG = this.mouseMoveOnSVG.bind(this);
    this.mouseUpOnSVG = this.mouseUpOnSVG.bind(this);
  }

  toggleDashboard(evt){
    if(evt.target.id !== SVG_CANVAS_ID) {
      this.props.toggleEditing(evt.target.id);
    } else {
      this.props.toggleEditing();
    }
  }
  mouseDownOnSVG(evt){
    this.props.mouseDownOnSVG(evt.target.id, {x: evt.clientX, y: evt.clientY});
  }
  mouseMoveOnSVG(evt){
    this.props.mouseMoveOnSVG({x: evt.clientX, y: evt.clientY});
  }
  mouseUpOnSVG(evt){
    this.props.mouseMoveOnSVG(evt.target.id, {x: evt.clientX, y: evt.clientY});
  }

  render() {
    return (
      <svg id={SVG_CANVAS_ID} style={{width: '100vw', height: '100vh'}}
          onClick={this.toggleDashboard}
          onMouseDown={(evt)=>{this.mouseDownOnSVG(evt)}}
          onMouseMove={(evt)=>{this.mouseMoveOnSVG(evt)}}
          onMouseUp={(evt)=>{this.mouseUpOnSVG(evt)}}>
        {this.props.blocks.map((element)=>{
          if (!element.properties.isdeleted) {
            const Element = blockElements(element);
            return <Element.component
              key={element.properties.id}
              {...Element.properties}
              />
          }
        })}
      </svg>
    );
  }
}
SvgCanvas.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(SvgCanvas);
