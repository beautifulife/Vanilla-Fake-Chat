import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import ChatContainer from '../containers/Chat_container';
import List from './List';

class App extends Component {
  componentDidMount() {
    const { onInit } = this.props;

    onInit();
  }

  render() {
    const { chatRoomList } = this.props;

    return (
      <Router>
        <div className="App">
          <Switch>
            <Redirect exact from="/" to="/list" />
            <Route path="/list" render={props => <List {...props} chatRoomList={chatRoomList} />} />
            <Route path="/chat/:id" render={props => <ChatContainer {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
