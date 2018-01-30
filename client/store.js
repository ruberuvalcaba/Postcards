import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


// import the root reducer
import rootReducer from './reducers/index';
//import middleware
import  fetchMiddleware  from './fetchMiddleware.js';
// Installs Redux dev tools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
/* END Installs Redux dev tools */
const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['routing']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, enhancers, applyMiddleware(fetchMiddleware));

export const persistor = persistStore(store);
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
