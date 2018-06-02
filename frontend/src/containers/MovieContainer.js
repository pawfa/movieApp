import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieContainer extends Component{

  render(){
    return <div> comments container</div>;
  }

}

const mapStateToProps = (state) => {
  return {
    movieDescription: state.movieDescription
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

MovieContainer = connect(mapStateToProps, mapDispatchToProps)(
    MovieContainer);
export default MovieContainer;