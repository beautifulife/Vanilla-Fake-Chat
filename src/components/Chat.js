import React, { Component } from 'react';
import './Chat.scss';

class Chat extends Component {
  handleSubmit(ev) {
    console.log('submit');
  }

  handleInputChange(ev) {
    console.log('change');
  }

  render() {
    return (
      <div className="Chat">
        <div className="Chat__header">
          <span className="Chat__header__title">임블리</span>
          <span className="Chat__header__backward">뒤로</span>
        </div>
        <div className="Chat__main">
          <li className="Chat__main__item__opponent">
            <div className="Chat__main__item__opponent__profile" />
            <div className="Chat__main__item__opponent__message">
              <p>Hey, How's it going this week?</p>
              <span>11:20</span>
            </div>
          </li>
          <li className="Chat__main__item">
            <div className="Chat__main__item__profile" />
            <div className="Chat__main__item__message">
              <p>Awesome, I finished some team shots, You guys want see it?</p>
              <span>11:20</span>
            </div>
          </li>
        </div>
        <div className="Chat__input">
          <form className="Chat__input__form" onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              value=""
              placeholder="Type something to send..."
              className="Chat__input__form__text"
              onChange={this.handleInputChange.bind(this)}
            />
            <input type="submit" value="보내기" className="Chat__input__form__submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;
