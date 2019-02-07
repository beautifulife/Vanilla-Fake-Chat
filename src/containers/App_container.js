import { connect } from 'react-redux';
import { setChatList } from '../actions';
import App from '../components/App';

const makeChatRoomList = (data) => {
  if (!data.rooms) {
    return [];
  }

  const chatRoomList = [];

  data.rooms.allIds.forEach((roomId) => {
    const opponentUserInfo = data.users.byId[data.rooms.byId[roomId].opponent];
    const messages = data.rooms.byId[roomId].messages;
    const lastMessageId = messages[messages.length - 1];
    const lastMessageInfo = data.messages.byId[lastMessageId];
    const lastMessageTime = lastMessageInfo.time;
    const dateDiff = new Date().getDate() - new Date(lastMessageTime).getDate();
    let lastMessageLocalTime;

    if (dateDiff === 0) {
      lastMessageLocalTime = `${new Date(lastMessageTime).getHours()}:${new Date(lastMessageTime).getMinutes()}`;
    } else {
      lastMessageLocalTime = `${new Date(lastMessageTime).getMonth() + 1}월 ${new Date(lastMessageTime).getDate()}일`;
    }

    chatRoomList.push({
      chatRoomId: roomId,
      opponentUserName: opponentUserInfo.name,
      opponentUserProfile: opponentUserInfo.profile_url,
      lastMessage: lastMessageInfo.text,
      lastMessageTime,
      lastMessageLocalTime,
    });
  });

  return chatRoomList;
};

const mapStateToProps = (state) => {
  const { chatRoomList } = state;

  return {
    chatRoomList: makeChatRoomList(chatRoomList)
  };
};

const mapDispatchToProps = dispatch => ({
  onInit: () => {
    fetch('../asset/data/fakeChat.json')
      .then(res => res.json())
      .then((data) => {
        dispatch(setChatList(data.entities));
      })
      .catch(err => console.log(err));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
