import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Chat.scss';
import AddressLink from '../containers/AddressLink';

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
    this.lastMessage.scrollIntoView();
  }

  handleSubmit(ev) {
    const { inputValue } = this.state;
    const { onSubmit, chatRoomId, chatData } = this.props;

    ev.preventDefault();

    if (inputValue.trim()) {
      onSubmit(inputValue, chatRoomId, chatData.userInfo.id);

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
    const { inputValue } = this.state;
    const { chatData } = this.props;

    const renderChatRoom = () => {
      const { messages, opponentInfo, userInfo } = chatData;
      let previousDate;

      if (!messages) {
        return undefined;
      }

      return messages.map((message, index) => {
        const { text, user, date, time } = message;
        const keyIndex = text + index.toString();
        let dateSeperatePoint;
        let messageOwner;

        if (user === userInfo.id) {
          messageOwner = 'user';
        } else {
          messageOwner = 'opponent';
        }

        if (previousDate && previousDate !== date) {
          dateSeperatePoint = date;
        }

        previousDate = date;

        const userProfileStyle = {
          backgroundImage: `url(../asset/images/${messageOwner === 'user' ? userInfo.profile : opponentInfo.profile}.jpg)`
        };

        return (
          <Fragment key={keyIndex}>
            {dateSeperatePoint && (<div className="Chat__main__line"><span>{dateSeperatePoint}</span></div>)}
            <li className={`Chat__main__item__${messageOwner}`}>
              <div style={userProfileStyle} className={`Chat__main__item__${messageOwner}__profile`} />
              <div className={`Chat__main__item__${messageOwner}__message`}>
                <p>{text}</p>
                <span>{time}</span>
              </div>
            </li>
          </Fragment>
        );
      });
    };

    return (
      <div className="Chat">
        <div className="Chat__header">
          <span className="Chat__header__title">{chatData.opponentInfo && chatData.opponentInfo.name}</span>
          <span className="Chat__header__backward">
            <AddressLink address="list"><span>뒤로</span></AddressLink>
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

Chat.propTypes = {
  onInit: PropTypes.func.isRequired,
  chatRoomId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  chatData: PropTypes.instanceOf(Object)
};

Chat.defaultProps = {
  chatData: {}
};

export default Chat;
