import { connect } from 'react-redux';
import { setChatList } from '../actions';
import App from '../components/App';

const makeChatRoomList = (data) => {
  if (!data.rooms) {
    return [];
  }

  const chatRoomList = [];

  data.rooms.allIds.forEach((roomId) => {
    const opponentInfo = data.users.byId[data.rooms.byId[roomId].opponent];
    const messages = data.rooms.byId[roomId].messages;
    const lastMessageInfo = data.messages.byId[messages[messages.length - 1]];
    const lastMessageTime = lastMessageInfo.time;
    let lastMessageLocalTime;

    if (new Date().getDate() - new Date(lastMessageTime).getDate() === 0) {
      lastMessageLocalTime = new Date(lastMessageTime).toLocaleTimeString('ko-KR', {
        hour: 'numeric',
        minute: 'numeric'
      });
    } else {
      lastMessageLocalTime = new Date(lastMessageTime).toLocaleDateString('ko-KR', {
        month: 'long',
        day: 'numeric'
      });
    }

    chatRoomList.push({
      chatRoomId: roomId,
      opponentName: opponentInfo.name,
      opponentProfile: opponentInfo.profile_url,
      lastMessage: lastMessageInfo.text,
      lastMessageTime,
      lastMessageLocalTime
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
