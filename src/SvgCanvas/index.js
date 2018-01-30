import React, {Component} from 'react';
import { connect } from 'react-redux';

import Styles from './styles.css';
import Rectangle from '../blocks/Rectangle';
import Circle from '../blocks/Circle';
import Ellipse from '../blocks/Ellipse';
import ConnectingLine from '../blocks/ConnectingLine';
import Marker from '../blocks/Marker';
import {randomId} from '../blocks/helperFunctions';
import {toggleEditing, mouseDownOnSVG, mouseMoveOnSVG, mouseUpOnSVG, setInitialLinePoints} from './actions';

const SVG_CANVAS_ID = 'mainSVGCanvas';
const componentOfElement = {
  rect: {
          component: Rectangle
        },
  circle: {
          component: Circle
        },
  ellipse: {
          component: Ellipse
        },
  line: {
    component: ConnectingLine
  }
}

const mapStateToProps = (state) => {
  return {
    blocks: state.blocks,
    isDrawingLine: state.isSettingLinesPoints
  }
};

const mapDispatchToProps = (dispatch) => ({
  toggleEditing: (elementId) => dispatch(toggleEditing(elementId)),
  mouseDownOnSVG: (elementId, point) => dispatch(mouseDownOnSVG(elementId, point)),
  mouseMoveOnSVG: (point) => dispatch(mouseMoveOnSVG(point)),
  mouseUpOnSVG: (elementId, point) => dispatch(mouseUpOnSVG(elementId, point)),
  setInitialLinePoints: (point) => dispatch(setInitialLinePoints(point))
});

class SvgCanvas extends Component {
  constructor(props) {
    super(props);
    this.toggleDashboard = this.toggleDashboard.bind(this);
    this.mouseDownOnSVG = this.mouseDownOnSVG.bind(this);
    this.mouseMoveOnSVG = this.mouseMoveOnSVG.bind(this);
    this.mouseUpOnSVG = this.mouseUpOnSVG.bind(this);
  }
/*TODO new events for svg to draw line*/
  toggleDashboard(evt){
    if(evt.target.id !== SVG_CANVAS_ID) {
      this.props.toggleEditing(evt.target.id);
    } else {
      this.props.toggleEditing();
    }
  }
  mouseDownOnSVG(evt){
    if (this.props.isDrawingLine) {
      console.log('setting initial position');
      this.props.setInitialLinePoints({x1: evt.clientX, y1: evt.clientY});
    } else if (evt.target.id !== SVG_CANVAS_ID) {
      this.props.mouseDownOnSVG(evt.target.id, {x: evt.clientX, y: evt.clientY});
    }
  }
  mouseMoveOnSVG(evt){
    if (this.props.isDrawingLine && this.props.isDrawingLine.properties.x1) {
      this.props.setInitialLinePoints({x2: evt.clientX, y2: evt.clientY});
    } else if (evt.target.id !== SVG_CANVAS_ID) {
      this.props.mouseMoveOnSVG({x: evt.clientX, y: evt.clientY});
    }
  }
  mouseUpOnSVG(evt){
    if (this.props.isDrawingLine) {
      this.props.setInitialLinePoints({x2: evt.clientX, y2: evt.clientY}, true);
    } else {
      this.props.mouseUpOnSVG(evt.target.id, {x: evt.clientX, y: evt.clientY});
    }
  }

  render() {
    return (
      <svg id={SVG_CANVAS_ID} className={Styles.mainSvgCanvas}
          onClick={this.toggleDashboard}
          onMouseDown={(evt)=>{this.mouseDownOnSVG(evt)}}
          onMouseMove={(evt)=>{this.mouseMoveOnSVG(evt)}}
          onMouseUp={(evt)=>{this.mouseUpOnSVG(evt)}}>
        <defs>
          <marker id={"markerArrow"} markerWidth={"13"} markerHeight={"13"} refX={"2"} refY={"6"} orient={"auto"} markerUnits={"userSpaceOnUse"}>
            <path d={"M2,2 L2,11 L10,6 L2,2"} style={{fill: '#000000'}} />
          </marker>
        </defs>
        {this.props.blocks.map((element)=>{
          if (!element.isdeleted) {
            const Comp = componentOfElement[element.nodeName].component;
            return <Comp
              key={element.properties.id}
              {...element.properties}
              text={element.text}
              />
          }
        })}
        {(() => {
          console.log('isDrawingLine', this.props.isDrawingLine);
          return this.props.isDrawingLine ? <ConnectingLine {...this.props.isDrawingLine.properties} id={this.props.isDrawingLine.id}/> : '';
          })()
        }
      </svg>
    );
  }
}
SvgCanvas.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(SvgCanvas);
