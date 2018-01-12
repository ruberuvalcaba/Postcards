import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import flowReducer from './flowReducer';

const rootReducer = combineReducers({flowReducer, routing: routerReducer});

export default rootReducer;
