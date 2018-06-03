import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListContainer from '../containers/ListContainer';
import MovieContainer from '../containers/MovieContainer';
import CommentsContainer from '../containers/CommentsContainer';
import {fetchCommentsForMovie, sendComment, sendMovieQuery, fetchAllCommentsReq} from '../actions';
import InputComponent from '../components/InputComponent';
import InputCommentComponent from '../components/InputCommentComponent';

class MainContainer extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount(){
    this.setState({
      movieData : this.props.moviesArr[0],
      movieId: ''
    });
  }

  showMovieDescription = (event) => {
    const {id} = event.target;

    this.props.fetchComments(id);
    this.setState({
      movieData: this.props.moviesArr.find((e)=>e._id === id),
      movieId: id
    });
  };
  fetchAllComments = () =>{
    this.props.fetchAllComments();
  };

  render() {
    return <div>
      <InputComponent sendQuery={this.props.sendMovieQuery} />
      <ListContainer showMovie={this.showMovieDescription}/>
      <MovieContainer movieData={this.state.movieData}/>
      <InputCommentComponent movieId={this.state.movieId} sendComment={this.props.sendComment} showAllComments={this.fetchAllComments}/>
      <CommentsContainer movieId={this.state.movieId} comments={this.props.commentsArr}/>
    </div>;
  }

}

const mapStateToProps = (state) => {
  return {
    moviesArr: state.movies,
    commentsArr: state.comments,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMovieQuery: (query) => {
      dispatch(sendMovieQuery(query));
    },
    sendComment: (comment) => {
      dispatch(sendComment(comment));
    },
    fetchComments: (movieId)=> {
      dispatch(fetchCommentsForMovie(movieId))
    },
    fetchAllComments: ()=> {
      dispatch(fetchAllCommentsReq())
    }
  };
};

MainContainer = connect(mapStateToProps, mapDispatchToProps)(
    MainContainer);
export default MainContainer;