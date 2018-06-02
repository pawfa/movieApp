import React, {Component} from 'react';
import { Input} from 'mdbreact';
import './CommentsContainer.css'
class CommentsContainer extends Component{

  createComments = (comments)=>{

    let commentsArr = [];
    console.log(comments);

    comments.forEach((e,i)=>{
      commentsArr.push(
          <div className={'comment-box z-depth-2'} key={i} id={e._id}>{e.content}</div>
      )
    });
    return commentsArr;
  };

  render(){
    const {comments} = this.props;
    if(comments) {
      return <div className={'commentsContainer'}>
        {this.createComments(comments)}
      </div>;
    }else{
      return null;
    }
  }

}

// const mapStateToProps = (state) => {
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };

// CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(
//     CommentsContainer);
export default CommentsContainer;