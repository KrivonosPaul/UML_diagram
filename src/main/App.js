import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import BlockStore from '../BlockStore';
import SvgCanvas from '../SvgCanvas';


const mapStateToProps = (state) => {
  console.log('state: ', state);
  return {
    blocks: state.blockStore.blocks
  }
};

const mapDispatchToProps = (dispatch) => ({

  // closeDateIntervalPicker: () => dispatch(closeDateIntervalPicker()),
  // useDateInterval: (toggle) => dispatch(useDateInterval(toggle))
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('App props: ', this.props);
    return (
      <Fragment>
        <SvgCanvas blocks={this.props.blocks}/>
        <BlockStore />
      </Fragment>
    );
  }
}
App.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(App);
