import { connect } from 'react-redux';
// import { toggleTodo } from '../actions';

import List from '../components/List';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  onInit: () => {
    fetch('../asset/data/fakeChat.json')
      .then(res => res.json())
      .then((data) => {
        dispatch(data);
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
)(List);
