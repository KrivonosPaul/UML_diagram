import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import BlockStore from '../BlockStore';
import SvgCanvas from '../SvgCanvas';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  // closeDateIntervalPicker: () => dispatch(closeDateIntervalPicker()),
  // useDateInterval: (toggle) => dispatch(useDateInterval(toggle))
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <SvgCanvas />
        <BlockStore />
      </Fragment>
    );
  }
}
App.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(App);
