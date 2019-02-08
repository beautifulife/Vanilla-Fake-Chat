import * as Types from '../actions/actionTypes';

const chatRoomId = (state = {}, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
  case Types.SELECT_CHAT_ROOM:
    newState.chatRoomId = action.chatRoomId;

    return newState;

  default:
    return state;
  }
};

export default chatRoomId;
