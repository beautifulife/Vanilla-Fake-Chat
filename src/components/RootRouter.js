import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContainer from '../containers/App_container';

const RootRouter = ({ store }) => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Switch>
          <Redirect exact from="/" to="/list" />
          <Route exact path="/:address" component={AppContainer} />
          <Route path="/:address/:chatRoomId" component={AppContainer} />
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>
);

RootRouter.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired
};

export default RootRouter;
