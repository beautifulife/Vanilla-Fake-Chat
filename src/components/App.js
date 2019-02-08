import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import ChatContainer from '../containers/Chat_container';
import List from './List';
import NotFound from './NotFound';

class App extends Component {
  componentDidMount() {
    const { onInit } = this.props;

    onInit();
  }

  render() {
    const { chatRoomList, match } = this.props;

    return (
      <div className="App">
        {match.params.address === 'list' && <List chatRoomList={chatRoomList} />}
        {match.params.address === 'chat' && <ChatContainer chatRoomId={match.params.chatRoomId} />}
        {match.params.address !== 'list' && match.params.address !== 'chat' && <NotFound />}
      </div>
    );
  }
}

App.propTypes = {
  onInit: PropTypes.func.isRequired,
  chatRoomList: PropTypes.instanceOf(Array).isRequired,
  match: PropTypes.instanceOf(Object).isRequired
};

export default App;
