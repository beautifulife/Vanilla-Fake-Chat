import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';
import AddressLink from '../containers/AddressLink';

const List = ({ chatRoomList }) => {
  const renderChatRoomList = () => {
    chatRoomList.sort((a, b) => {
      return new Date(b.lastMessageTime) - new Date(a.lastMessageTime);
    });

    return chatRoomList.map((chatRoom) => {
      const {
        chatRoomId,
        opponentName,
        opponentProfile,
        lastMessage,
        lastMessageLocalTime
      } = chatRoom;
      const opponentProfileStyle = {
        backgroundImage: `url(../asset/images/${opponentProfile}.jpg)`
      };

      return (
        <AddressLink key={chatRoomId} address={`/chat/${chatRoomId}`} state={opponentName}>
          <li className="List__main__item">
            <div style={opponentProfileStyle} className="List__main__item__profile" />
            <div className="List__main__item__info">
              <p>{opponentName}</p>
              <p>{lastMessage}</p>
              <span>{lastMessageLocalTime}</span>
            </div>
          </li>
        </AddressLink>
      );
    });
  };

  return (
    <div className="List">
      <div className="List__header">
        <AddressLink address="/">
          <span>CHAT</span>
        </AddressLink>
      </div>
      <div className="List__new">
        <span>+ New message</span>
      </div>
      <div className="List__main">{renderChatRoomList()}</div>
    </div>
  );
};

List.propTypes = {
  chatRoomList: PropTypes.instanceOf(Array).isRequired
};

export default List;
