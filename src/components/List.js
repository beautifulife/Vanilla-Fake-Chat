import React, { Component } from 'react';
import './List.scss';

class List extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="List">
        <div className="List__header">
          <span>CHAT</span>
        </div>
        <div className="List__new">
          <span>+ New message</span>
        </div>
        <div className="List__main">
          <li className="List__main__item">
            <div className="List__main__item__profile" />
            <div className="List__main__item__info">
              <p>임블리</p>
              <p>Hey, how it is going?</p>
              <span>11:21</span>
            </div>
          </li>
        </div>
      </div>
    );
  }
}

export default List;
