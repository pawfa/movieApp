import React, {Component} from 'react';
import './CommentsContainer.css'
import CommentComponent from '../components/CommentComponent';
class CommentsContainer extends Component{

  createComments = (comments)=>{
    let commentsArr = [];
    comments.forEach((e,i)=>{
      commentsArr.push(
          <CommentComponent key={i} id={e._id} comment={e}/>
      )
    });
    return commentsArr;
  };

  render(){
    const {comments} = this.props;
    if(comments) {
      return <div>
        {this.createComments(comments)}
      </div>;
    }else{
      return null;
    }
  }

}
export default CommentsContainer;