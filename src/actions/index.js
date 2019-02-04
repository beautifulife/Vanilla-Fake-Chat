import * as Types from './actionTypes';

export const setChatList = data => ({
  type: Types.SET_CHAT_LIST,
  rooms: data.rooms,
  users: data.users,
  messages: data.messages
});

export const test = () => {

};
