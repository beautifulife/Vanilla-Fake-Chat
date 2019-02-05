import React, { Component } from 'react';
import './List.scss';

import { Link } from 'react-router-dom';

class List extends Component {
  render() {
    const { chatRoomList } = this.props;

    const renderChatRoomList = () => {
      return chatRoomList.map((chatRoom) => {
        const {
          chatRoomId,
          opponentUserName,
          opponentUserProfile,
          lastMessage,
          lastMessageTime
        } = chatRoom;

        const userProfileStyle = {
          backgroundImage: `url(../asset/images/${opponentUserProfile}.jpg)`
        };

        return (
          <Link to={`/chat/${chatRoomId}`} key={chatRoomId}>
            <li className="List__main__item">
              <div style={userProfileStyle} className="List__main__item__profile" />
              <div className="List__main__item__info">
                <p>{opponentUserName}</p>
                <p>{lastMessage}</p>
                <span>{lastMessageTime}</span>
              </div>
            </li>
          </Link>
        );
      });
    };

    return (
      <div className="List">
        <div className="List__header">
          <Link to="/">
            <span>CHAT</span>
          </Link>
        </div>
        <div className="List__new">
          <span>+ New message</span>
        </div>
        <div className="List__main">
          {renderChatRoomList()}
        </div>
      </div>
    );
  }
}

export default List;
