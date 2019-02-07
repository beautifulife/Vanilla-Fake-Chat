import { connect } from 'react-redux';
import { selectChatRoom, addMessage } from '../actions';
import Chat from '../components/Chat';

const makechatData = (data, id) => {
  if (!data.rooms || !id.chatRoomId) {
    return {};
  }

  const chatRoomInfo = data.rooms.byId[id.chatRoomId];
  const opponentInfo = {
    id: chatRoomInfo.opponent,
    name: data.users.byId[chatRoomInfo.opponent].name,
    profile: data.users.byId[chatRoomInfo.opponent].profile_url
  };
  const userInfo = {
    id: chatRoomInfo.user,
    profile: data.users.byId[chatRoomInfo.user].profile_url
  };
  const messages = [];

  chatRoomInfo.messages.forEach((messageId) => {
    const messageTime = data.messages.byId[messageId].time;

    messages.push({
      text: data.messages.byId[messageId].text,
      user: data.messages.byId[messageId].user,
      date: `${new Date(messageTime).getMonth() + 1}월 ${new Date(messageTime).getDate()}일`,
      time: `${new Date(messageTime).getHours()}:${new Date(messageTime).getMinutes()}`
    });
  });

  return {
    opponentInfo,
    userInfo,
    messages,
  };
};

const mapStateToProps = (state) => {
  const { chatRoomList, chatRoomId } = state;

  return {
    chatData: makechatData(chatRoomList, chatRoomId)
  };
};

const mapDispatchToProps = dispatch => ({
  onInit: (chatRoomId) => {
    dispatch(selectChatRoom(chatRoomId));
  },
  onSubmit: (inputValue, chatRoomId, userId) => {
    dispatch(addMessage(inputValue, chatRoomId, userId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
