import { combineReducers } from 'redux';
import chatRoomList from './chatRoomList';
import chatRoomId from './chatRoomId';

export default combineReducers({
  chatRoomList,
  chatRoomId
});
