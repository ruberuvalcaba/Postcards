import React from 'react';
import { render } from 'react-dom';
import { PersistGate } from 'redux-persist/lib/integration/react'

// import css
import cssMain from './styles/main.css';

// import components
import App from './components/App';
import Single from './components/Single';
import SingleUploaded from './components/SingleUploaded';
import Welcome from './components/Welcome';
import Gallery from './components/Gallery';
import Albums from './components/Albums';
import Collections from './components/Collections';
import Contact from './components/Contact';
import LoadingPage from './components/LoadingPage';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history, persistor } from './store';

const router = (
  <Provider store={store}>

    <Router history={history}>
<PersistGate loading={<LoadingPage />} persistor={persistor}>
        <Route path="/" component={App}>
          <IndexRoute component={Welcome}></IndexRoute>
          <Route path="/gallery" component={Gallery}></Route>
          <Route path="/albums" component={Albums}></Route>
          <Route path="/collections" component={Collections}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="gallery/view/:imgID" component={Single}></Route>
          <Route path="/uploaded/:imgID" component={SingleUploaded}></Route>
          <Route path="/loading" component={LoadingPage}></Route>
        </Route>
        </PersistGate>

    </Router>
  </Provider>
)
render(
  router,
  document.getElementById('root')
);
