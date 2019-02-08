import * as Types from './actionTypes';

export const setChatList = data => ({
  type: Types.SET_CHAT_LIST,
  rooms: data.rooms,
  users: data.users,
  messages: data.messages
});

export const selectChatRoom = chatRoomId => ({
  type: Types.SELECT_CHAT_ROOM,
  chatRoomId,
});

export const addMessage = (text, chatRoomId, user) => ({
  type: Types.ADD_MESSAGE,
  chatRoomId,
  user,
  text,
  time: new Date().toJSON()
});
