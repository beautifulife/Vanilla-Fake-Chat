import * as Types from '../actions/actionTypes';

const chatRoomList = (state = {}, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
  case Types.SET_CHAT_LIST:
    newState.rooms = action.rooms;
    newState.users = action.users;
    newState.messages = action.messages;

    return newState;

  case Types.ADD_MESSAGE:
    const messageId = (newState.messages.allIds.length + 1).toString();

    newState.messages.byId[messageId] = {
      id: messageId,
      user: action.user,
      text: action.text,
      time: action.time
    };
    newState.messages.allIds.push(messageId);
    newState.rooms.byId[action.chatRoomId].messages.push(messageId);

    return newState;

  default:
    return state;
  }
};

export default chatRoomList;
