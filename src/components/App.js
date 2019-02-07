import React, { Component } from 'react';
import './App.scss';
import ChatContainer from '../containers/Chat_container';
import List from './List';

class App extends Component {
  componentDidMount() {
    const { onInit } = this.props;

    onInit();
  }

  render() {
    const { chatRoomList, match } = this.props;

    console.log(match);

    return (
      <div className="App">
        {match.params.filter === 'list' && <List chatRoomList={chatRoomList} />}
        {match.params.filter === 'chat' && <ChatContainer chatRoomId={match.params.chatRoomId} />}
      </div>
    );
  }
}

export default App;
