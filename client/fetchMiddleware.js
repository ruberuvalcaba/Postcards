// Use a middleware for asyncronous data loading
const fetchMiddleware = store => next => action => {
  if(action.promise) {
    action.promise
    .then(res => {
      if(action.fetch === 'media') {
        return store.dispatch({ type: 'MEDIA_RECEIVED', payload: res.data });
      }
    });
  } else {
    next(action);
  }
};

export default fetchMiddleware;
