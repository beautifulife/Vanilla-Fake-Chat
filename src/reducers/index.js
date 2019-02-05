import { combineReducers } from 'redux';
import chatRoomList from './chatRoomList';
import chatRoom from './chatRoom';

export default combineReducers({
  appData: chatRoomList,
  chatRoomId: chatRoom
});
