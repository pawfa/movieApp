import React, {Component} from 'react';
import './CommentComponent.css'
import {Component} from 'react';

class CommentComponent extends Component {

  render() {
    const {comment} = this.props.comment;
    return <div className={'commentComponent'}>{comment}</div>;

  }

}

export default CommentComponent;