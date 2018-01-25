import React, {Component} from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Rectangle from '../blocks/Rectangle';
import Circle from '../blocks/Circle';
import Ellipse from '../blocks/Ellipse';
import ConnectingLine from '../blocks/ConnectingLine';

import Styles from './styles.css';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  // closeDateIntervalPicker: () => dispatch(closeDateIntervalPicker()),
  // useDateInterval: (toggle) => dispatch(useDateInterval(toggle))
});

class BlockStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }

  toggleBlockStore(){
    this.setState({
      isOpened: !this.state.isOpened
    });
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
        <svg className={Styles.svgPreviewBox}>
          <Rectangle />
          <Circle />
          <Ellipse />
        </svg>
      </div>
    </div>;
  }
}
BlockStore.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(BlockStore);
