import { connect } from 'react-redux';
import { setChatList } from '../actions';

import App from '../components/App';

const mapStateToProps = state => ({
  chatRoomData: state,
});

const mapDispatchToProps = dispatch => ({
  onInit: () => {
    fetch('../asset/data/fakeChat.json')
      .then(res => res.json())
      .then((data) => {
        dispatch(setChatList(data.entities));
      })
      .catch(err => console.log(err));
  },
  onClickList: () => {
    console.log('onClickList');
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
