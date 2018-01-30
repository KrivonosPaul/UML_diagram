import React, {Component} from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Rectangle from '../blocks/Rectangle';
import Circle from '../blocks/Circle';
import Ellipse from '../blocks/Ellipse';
import ConnectingLine from '../blocks/ConnectingLine';
import Marker from '../blocks/Marker';
import {addElement, startCreatingConnection} from './actions';
import {defaultProperties} from '../blocks/defaultProperties';


import Styles from './styles.css';

const mapStateToProps = (state) => ({
  nextIndex: state.blocks.length
});

const mapDispatchToProps = (dispatch) => ({
  addElement: (nodeName, point, nextIndex) => dispatch(addElement(nodeName, point, nextIndex)),
  startCreatingConnection: (index) => dispatch(startCreatingConnection(index))
});

class BlockStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this.StoreElementsDefaultProperties = {
      ...defaultProperties,
      onMouseDown: (evt) => {this.onMouseDownHendler(evt)},
    };
  }

  toggleBlockStore(){
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  onMouseDownHendler(evt){
    this.setState({
      isOpened: !this.state.isOpened
    });
    this.props.addElement(evt.target.nodeName, {x: evt.clientX, y: evt.clientY}, this.props.nextIndex);
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
          <defs>
            <Marker />
          </defs>
          <Rectangle {...this.StoreElementsDefaultProperties} />
          <Circle {...this.StoreElementsDefaultProperties} />
          <Ellipse {...this.StoreElementsDefaultProperties} />
          <ConnectingLine strokeWidth={4} onClick={() => {this.toggleBlockStore(); this.props.startCreatingConnection(this.props.nextIndex)}}/>
        </svg>
      </div>
    </div>;
  }
}
BlockStore.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(BlockStore);
