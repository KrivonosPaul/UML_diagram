import React, {Component} from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Styles from './styles.css';

const mapStateToProps = (state) => ({
  isOpened: (state.currentIndex !== -1),

});

const mapDispatchToProps = (dispatch) => ({

});

class EditorMenu extends Component {
  constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
    this.changeStrokeColor = this.changeStrokeColor.bind(this)
    this.changeFillColor = this.changeFillColor.bind(this)
  }

  changeText(evt){
    console.log(evt.target.value);
  }
  changeStrokeColor(evt){
    console.log(evt.target.value)
  }
  changeFillColor(evt){
    console.log(evt.target.value)
  }

  render() {
    const mainBlockStyle = classnames(
      Styles.dashboard,
      {[Styles.opened]: this.props.isOpened}
    );
    return <div className={mainBlockStyle}>
      <label>stroke: <input type='color' onChange={this.changeStrokeColor}/> </label>
      <label>fill: <input type='color' onChange={this.changeFillColor}/> </label>
      <label>text: <input type='text' onChange={this.changeText}/></label>
      <button>DELETE</button>
    </div>;
  }
}
EditorMenu.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(EditorMenu);
