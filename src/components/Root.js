import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AppContainer from '../containers/App_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Switch>
          <Redirect exact from="/" to="/list" />
          <Route path="/:filter/:chatRoomId" component={AppContainer} />
          <Route path="/:filter" component={AppContainer} />
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
