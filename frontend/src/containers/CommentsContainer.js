import React, {Component} from 'react';
import {connect} from 'react-redux';

class CommentsContainer extends Component{

  render(){
    return <div> comments container</div>;
  }

}

const mapStateToProps = (state) => {
  return {
    allComments: state.listOfAllCommentsInDatabase,
    commentsForMovie: state.listOfCommentsForMovie
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(
    CommentsContainer);
export default CommentsContainer;