import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {

  if(typeof localStorage.getItem('media') === 'undefined') {
    localStorage.setItem("media", JSON.stringify(state.flowReducer.media));
  }

  return {
    media: state.flowReducer.media
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
