import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';
//import middleware
import  fetchMiddleware  from './fetchMiddleware.js';
// Installs Redux dev tools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
/* END Installs Redux dev tools */
const store = createStore(rootReducer, enhancers, applyMiddleware(fetchMiddleware));
export const history = syncHistoryWithStore(browserHistory, store);

// Hot reloading Redux reducer with webpack
if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}
/* END Hot reloading Redux reducer with webpack */
export default store;
