import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';
import getLocalMedia from '../config/getLocalStorageMedia.js';

function mapStateToProps(state) {
  return {
    media: state.flowReducer.media,
    uploadedMediaID: state.flowReducer.mediaID
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
