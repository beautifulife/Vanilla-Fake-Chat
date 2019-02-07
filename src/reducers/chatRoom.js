import * as Types from '../actions/actionTypes';

const chatRoom = (state = {}, action) => {
  switch (action.type) {
  case Types.SET_CHAT_ROOM:
    return Object.assign({}, state, {
      chatRoomId: action.chatRoomId,
    });
  default:
    return state;
  }
};

export default chatRoom;
