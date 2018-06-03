import React, {Component} from 'react';
import './CommentComponent.css'

class CommentComponent extends Component {

  render() {
    const {content, dateTime} = this.props.comment;
    const date = dateTime.split(" ");
    return <div className={'commentComponent z-depth-1'}>
      <header className="teal-text"><h6 className="font-weight-bold mb-3"><i className="fa fa-calendar pr-2"></i>{date[0]} {date[1]}</h6></header>
      <p className={'commentComponent-content z-depth-1'}>{content}</p>
      </div>;

  }

}

export default CommentComponent;