import { connect } from 'react-redux';
import { setChatRoom, addMessage } from '../actions';

import Chat from '../components/Chat';

const makeChatRoomData = (data, id) => {
  if (!data.rooms || !id.chatRoomId) {
    return [];
  }

  const roomInfo = data.rooms.byId[id.chatRoomId];
  const opponentInfo = {
    id: roomInfo.opponent,
    profile: data.users.byId[roomInfo.opponent].profile_url
  };
  const userInfo = {
    id: roomInfo.user,
    profile: data.users.byId[roomInfo.user].profile_url
  };
  const messages = [];

  roomInfo.messages.forEach((messageId) => {
    messages.push({
      text: data.messages.byId[messageId].text,
      user: data.messages.byId[messageId].user,
      time: data.messages.byId[messageId].time
    });
  });

  return {
    opponentInfo,
    userInfo,
    messages,
  };
};

const mapStateToProps = (state) => {
  const { appData, chatRoomId } = state;

  return {
    chatRoomData: makeChatRoomData(appData, chatRoomId)
  };
};

const mapDispatchToProps = dispatch => ({
  onInit: (chatRoomId) => {
    dispatch(setChatRoom(chatRoomId));
  },
  onSubmit: (inputValue, chatRoomId, userId) => {
    console.log('여기는 콘테이너안', inputValue);
    dispatch(addMessage(inputValue, chatRoomId, userId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
