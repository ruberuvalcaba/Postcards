import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import flowReducer from './flowReducer';

const rootReducer = combineReducers({posts, comments, flowReducer, routing: routerReducer});

export default rootReducer;
