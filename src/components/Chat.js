import React, { Component } from 'react';
import './Chat.scss';

import FilterLink from '../containers/FilterLink';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  componentDidMount() {
    const { onInit, chatRoomId } = this.props;

    onInit(chatRoomId);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.lastMessage.scrollIntoView({ behavior: 'smooth' });
  }

  handleSubmit(ev) {
    const { inputValue } = this.state;
    const { onSubmit, chatRoomId, chatRoomData } = this.props;

    ev.preventDefault();

    if (inputValue.trim()) {
      onSubmit(inputValue, chatRoomId, chatRoomData.userInfo.id);

      this.setState({
        inputValue: ''
      });
    }
  }

  handleInputChange(ev) {
    this.setState({
      inputValue: ev.currentTarget.value
    });
  }

  render() {
    console.log(this.props);

    const { inputValue } = this.state;
    const { chatRoomData } = this.props;

    const renderChatRoom = () => {
      const { messages, opponentInfo, userInfo } = chatRoomData;

      if (!messages) {
        return undefined;
      }

      return messages.map((message, index) => {
        const keyIndex = message.text + index.toString();
        const localMessageTime = `${new Date(message.time).getHours()}:${new Date(message.time).getMinutes()}`;

        if (message.user === userInfo.id) {
          const userProfileStyle = {
            backgroundImage: `url(../asset/images/${userInfo.profile}.jpg)`
          };

          return (
            <li key={keyIndex} className="Chat__main__item">
              <div style={userProfileStyle} className="Chat__main__item__profile" />
              <div className="Chat__main__item__message">
                <p>{message.text}</p>
                <span>{localMessageTime}</span>
              </div>
            </li>
          );
        }

        if (message.user === opponentInfo.id) {
          const userProfileStyle = {
            backgroundImage: `url(../asset/images/${opponentInfo.profile}.jpg)`
          };

          return (
            <li key={keyIndex} className="Chat__main__item__opponent">
              <div style={userProfileStyle} className="Chat__main__item__opponent__profile" />
              <div className="Chat__main__item__opponent__message">
                <p>{message.text}</p>
                <span>{localMessageTime}</span>
              </div>
            </li>
          );
        }
      });
    };

    return (
      <div className="Chat">
        <div className="Chat__header">
          <span className="Chat__header__title">{chatRoomData.opponentInfo && chatRoomData.opponentInfo.name}</span>
          <span className="Chat__header__backward">
            <FilterLink filter="list">뒤로</FilterLink>
          </span>
        </div>
        <div className="Chat__main">
          {renderChatRoom()}
          <div
            className="Chat__main__bottom"
            ref={(ref) => { this.lastMessage = ref; }}
          />
        </div>
        <div className="Chat__input">
          <form className="Chat__input__form" onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              value={inputValue}
              placeholder="Type something to send..."
              className="Chat__input__form__text"
              onChange={this.handleInputChange.bind(this)}
              autoFocus
            />
            <input type="submit" value="보내기" className="Chat__input__form__submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;
