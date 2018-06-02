import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputContainer from "../containers/InputContainer";
import ListContainer from "../containers/ListContainer";
import MovieContainer from "../containers/MovieContainer";
import CommentsContainer from "../containers/CommentsContainer";

class MainContainer extends Component{

  render(){
    return <div>
      <InputContainer/>
      <ListContainer/>
      <MovieContainer/>
      <CommentsContainer/>
    </div>;
  }

}
export default MainContainer;