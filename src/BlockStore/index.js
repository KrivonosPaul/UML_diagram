import React, {Component} from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Rectangle from '../blocks/Rectangle';
import Circle from '../blocks/Circle';
import Ellipse from '../blocks/Ellipse';
import {addElement} from './action_reducer';

import Styles from './styles.css';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  addElement: (nodeName, point) => dispatch(addElement(nodeName, point))
});

class BlockStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this.StoreElementsBehaviour = {
      onMouseDown: (evt) => {this.onMouseDownHendler(evt)},
      onMouseMove: (evt) => {this.onMouseMoveHendler(evt)},
      onMouseUp: (evt) => {this.onMouseUpHendler(evt)},
      onMouseLeave: (evt) => {this.onMouseLeaveHendler(evt)}
    };
  }

  toggleBlockStore(evt){
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  onMouseDownHendler(evt){
    this.props.addElement(evt.target.nodeName, {x: evt.clientX, y: evt.clientY}); // dispatched an action of addding Element onto canvas
    this.setState({
      isOpened: !this.state.isOpened
    });
  }
  onMouseMoveHendler(evt){
  }
  onMouseUpHendler(evt){
  }
  onMouseLeaveHendler(evt){
  }

  render() {
    const isOpened = this.state.isOpened;
    const mainBlockStyle = classnames(
      Styles.toolBox,
      {[Styles.opened]: isOpened}
    );
    const toggleButtonStyle = classnames(
      Styles.toggleButton,
      {[Styles.clicked]: isOpened}
    );
    return <div className={mainBlockStyle}>
      <div
        className={toggleButtonStyle}
        onClick={this.toggleBlockStore.bind(this)}>
        <span dangerouslySetInnerHTML={isOpened ? {__html: '&#9668;'} : {__html: '&#9658;'}}></span>
      </div>
      <div className={Styles.previewZone}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.com/svgjs" className={Styles.svgPreviewBox}>
          <Rectangle {...this.StoreElementsBehaviour} />
          <Circle {...this.StoreElementsBehaviour} />
          <Ellipse {...this.StoreElementsBehaviour} />
        </svg>
      </div>
    </div>;
  }
}
BlockStore.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(BlockStore);
