import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Chat from './Chat';
import ListContainer from '../containers/List_container';

class App extends Component {
  componentDidMount() {
    const { onInit } = this.props;

    onInit();
  }

  render() {
    const { chatRoomData } = this.props;

    return (
      <Router>
        <div className="App">
          <Switch>
            <Redirect exact from="/" to="/list" />
            <Route path="/list" render={props => <ListContainer {...props} chatRoomData={chatRoomData} />} />
            <Route path="/chat/:id" render={props => <Chat {...props} chatRoomData={chatRoomData} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
