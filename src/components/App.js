import React, { Component } from 'react';
import './App.scss';

import List from './List';
import Chat from './Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
        {/* <Chat /> */}
      </div>
    );
  }
}

export default App;
