import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListContainer from "../containers/ListContainer";
import MovieContainer from "../containers/MovieContainer";
import CommentsContainer from "../containers/CommentsContainer";
import {sendMovieQuery} from '../actions';
import InputComponent from '../components/InputComponent';

class MainContainer extends Component{

  render(){
    return <div>

      <InputComponent sendQuery={this.props.sendMovieQuery}/>
      <ListContainer/>

      <MovieContainer/>
      <CommentsContainer/>
    </div>;
  }

}
const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMovieQuery: (query) => {
      dispatch(sendMovieQuery(query));
    },
  };
};

MainContainer = connect(mapStateToProps, mapDispatchToProps)(
    MainContainer);
export default MainContainer;