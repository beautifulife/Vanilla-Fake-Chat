import * as Types from '../actions/actionTypes';

const chatRoomList = (state = {}, action) => {
  switch (action.type) {
  case Types.SET_CHAT_LIST:
    return Object.assign({}, state, {
      rooms: action.rooms,
      users: action.users,
      messages: action.messages,
    });
  case Types.ADD_MESSAGE:
    const newState = JSON.parse(JSON.stringify(state));
    const messageId = (newState.messages.allIds.length + 1).toString();

    newState.messages.byId[messageId] = {
      id: messageId,
      user: action.user,
      text: action.text,
      time: action.time,
    };
    newState.messages.allIds.push(messageId);
    newState.rooms.byId[action.chatRoomId].messages.push(messageId);

    return newState;
  default:
    return state;
  }
};

export default chatRoomList;
