import React, {Component} from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Styles from './styles.css';
import {changeStrokeColor, changeFillColor, changeText} from './actions';

const mapStateToProps = (state) => ({
  isOpened: (~state.currentEditing),
  currentStrokeColor: (~state.currentEditing) ? state.blocks[state.currentEditing].properties.stroke : '#000000',
  currentFillColor: (~state.currentEditing) ? state.blocks[state.currentEditing].properties.fill : '#ffffff'
});

const mapDispatchToProps = (dispatch) => ({
  changeStrokeColor: (strokeColor) => dispatch(changeStrokeColor(strokeColor)),
  changeFillColor: (fillColor) => dispatch(changeFillColor(fillColor)),
  changeText: (text) => dispatch(changeText(text))
});

class EditorMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mainBlockStyle = classnames(
      Styles.dashboard,
      {[Styles.opened]: this.props.isOpened}
    );
    return <div className={mainBlockStyle}>
      <label>stroke: <input type='color' value={this.props.currentStrokeColor} onChange={(evt) => {this.props.changeStrokeColor(evt.target.value)}}/> </label>
      <label>fill: <input type='color' value={this.props.currentFillColor} onChange={(evt) => {this.props.changeFillColor(evt.target.value)}}/> </label>
      <label>text: <input type='text' onChange={(evt) => {this.props.changeText(evt.target.value)}}/></label>
      <button>DELETE</button>
    </div>;
  }
}
EditorMenu.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(EditorMenu);
