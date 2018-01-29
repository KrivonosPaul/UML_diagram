import React, {Component} from 'react';
import { connect } from 'react-redux';

import Styles from './styles.css';
import Rectangle from '../blocks/Rectangle';
import Circle from '../blocks/Circle';
import Ellipse from '../blocks/Ellipse';
import ConnectingLine from '../blocks/ConnectingLine';
import {randomId} from '../blocks/helperFunctions';
import {toggleEditing, mouseDownOnSVG, mouseMoveOnSVG, mouseUpOnSVG} from './actions';

const SVG_CANVAS_ID = 'mainSVGCanvas';
const componentOfElement = {
  rect: {
          component: Rectangle,
        },
  circle: {
          component: Circle,
        },
  ellipse: {
          component: Ellipse,
        }
}

const mapStateToProps = (state) => {
  return {
    blocks: state.blocks
  }
};

const mapDispatchToProps = (dispatch) => ({
  toggleEditing: (elementId) => dispatch(toggleEditing(elementId)),
  mouseDownOnSVG: (elementId, point) => dispatch(mouseDownOnSVG(elementId, point)),
  mouseMoveOnSVG: (point) => dispatch(mouseMoveOnSVG(point)),
  mouseUpOnSVG: (elementId, point) => dispatch(mouseUpOnSVG(elementId, point))
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
    if(evt.target.id !== SVG_CANVAS_ID) {
      this.props.mouseDownOnSVG(evt.target.id, {x: evt.clientX, y: evt.clientY});
    }
  }
  mouseMoveOnSVG(evt){
    if(evt.target.id !== SVG_CANVAS_ID) {
      this.props.mouseMoveOnSVG({x: evt.clientX, y: evt.clientY});
    }
  }
  mouseUpOnSVG(evt){
    this.props.mouseUpOnSVG(evt.target.id, {x: evt.clientX, y: evt.clientY});
  }

  render() {
    return (
      <svg id={SVG_CANVAS_ID} className={Styles.mainSvgCanvas}
          onClick={this.toggleDashboard}
          onMouseDown={(evt)=>{this.mouseDownOnSVG(evt)}}
          onMouseMove={(evt)=>{this.mouseMoveOnSVG(evt)}}
          onMouseUp={(evt)=>{this.mouseUpOnSVG(evt)}}>
        {this.props.blocks.map((element)=>{
          if (!element.properties.isdeleted) {
            const Comp = componentOfElement[element.nodeName].component;
            return <Comp
              key={element.properties.id}
              {...element.properties}
              text={element.text}
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
