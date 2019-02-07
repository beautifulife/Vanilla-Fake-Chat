import { connect } from 'react-redux';
import { setChatList } from '../actions';
import App from '../components/App';

const makeChatRoomList = (data) => {
  if (!data.rooms) {
    return [];
  }

  const roomListData = [];

  data.rooms.allIds.forEach((roomId) => {
    const opponentUserInfo = data.users.byId[data.rooms.byId[roomId].opponent];
    const messages = data.rooms.byId[roomId].messages;
    const lastMessageId = messages[messages.length - 1];
    const lastMessageInfo = data.messages.byId[lastMessageId];

    roomListData.push({
      chatRoomId: roomId,
      opponentUserName: opponentUserInfo.name,
      opponentUserProfile: opponentUserInfo.profile_url,
      lastMessage: lastMessageInfo.text,
      lastMessageTime: lastMessageInfo.time
    });
  });

  return roomListData;
};

const mapStateToProps = (state) => {
  const { appData } = state;

  return {
    chatRoomList: makeChatRoomList(appData)
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
