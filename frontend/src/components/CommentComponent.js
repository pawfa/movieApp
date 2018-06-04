import React, {Component} from 'react';
import './CommentComponent.css';
import {Fa} from "mdbreact";

class CommentComponent extends Component {

  render() {
    const {content, dateTime} = this.props.comment;
    const date = new Date(dateTime);
    const utc = date.getTime();
    const currDate = new Date(utc);
    return <div className={'commentComponent z-depth-1'}>

      <header className="teal-text">
        <h6 className="font-weight-bold mb-3">
          <Fa className="fa fa-calendar pr-2"/>{currDate.toDateString()} {currDate.toLocaleTimeString()}</h6>
        </header>
      <p className={'commentComponent-content z-depth-1'}>{content}</p>
    </div>;
  }

}

export default CommentComponent;