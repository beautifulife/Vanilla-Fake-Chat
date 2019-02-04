import * as Types from '../actions/actionTypes';

const chatRoomList = (state = {}, action) => {
  switch (action.type) {
  case Types.SET_CHAT_LIST:
    return Object.assign({}, state, {
      rooms: action.rooms,
      users: action.users,
      messages: action.messages,
    });
  default:
    return state;
  }
};

export default chatRoomList;
