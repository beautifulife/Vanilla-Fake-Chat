import React, { Component } from 'react';
import './Chat.scss';

import { Link } from 'react-router-dom';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  componentDidMount() {
    const { onInit, match } = this.props;

    onInit(match.params.id);
  }

  handleSubmit(ev) {
    const { inputValue } = this.state;
    const { onSubmit } = this.props;

    ev.preventDefault();
    onSubmit(inputValue);
  }

  handleInputChange(ev) {
    this.setState({
      inputValue: ev.currentTarget.value
    });
  }

  render() {
    const { inputValue } = this.state;
    const { chatRoomData } = this.props;

    const renderChatRoom = () => {
      const { messages, opponentInfo, userInfo } = chatRoomData;

      if (!messages) {
        return undefined;
      }

      return messages.map((message, index) => {
        const keyIndex = message.text + index.toString();

        if (message.user === userInfo.id) {
          const userProfileStyle = {
            backgroundImage: `url(../asset/images/${userInfo.profile}.jpg)`
          };

          return (
            <li key={keyIndex} className="Chat__main__item">
              <div style={userProfileStyle} className="Chat__main__item__profile" />
              <div className="Chat__main__item__message">
                <p>{message.text}</p>
                <span>{message.time}</span>
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
                <span>{message.time}</span>
              </div>
            </li>
          );
        }
      });
    };

    console.log(this.props);

    return (
      <div className="Chat">
        <div className="Chat__header">
          <span className="Chat__header__title">임블리</span>
          <span className="Chat__header__backward">
            <Link to="/list">뒤로</Link>
          </span>
        </div>
        <div className="Chat__main">
          {renderChatRoom()}
        </div>
        <div className="Chat__input">
          <form className="Chat__input__form" onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              value={inputValue}
              placeholder="Type something to send..."
              className="Chat__input__form__text"
              onChange={this.handleInputChange.bind(this)}
            />
            <input type="submit" value="보내기" className="Chat__input__form__submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;
