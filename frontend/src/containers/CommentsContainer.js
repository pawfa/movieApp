import React, {Component} from 'react';
import CommentComponent from '../components/CommentComponent';
class CommentsContainer extends Component{

  createComments = (comments)=>{
    return comments.map((e)=>
          <CommentComponent key={e._id} id={e._id} comment={e}/>
    );
  };

  render(){
    const {comments} = this.props;

      return comments ? <div>
        {this.createComments(comments)}
      </div> : null;

  }
}
export default CommentsContainer;