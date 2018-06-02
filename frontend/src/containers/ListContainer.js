import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListComponent from '../components/ListComponent';
import {fetchAllMoviesReq} from '../actions';

class ListContainer extends Component{

  componentDidMount(){
    this.props.fetchAllMovies();
  }

  render(){
    return <ListComponent listOfAllMovies ={this.props.moviesList}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    moviesList: state.moviesReducer.listOfAllMovies
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMovies: () => {
      dispatch(fetchAllMoviesReq());
    },
  };
};

ListContainer = connect(mapStateToProps, mapDispatchToProps)(
    ListContainer);
export default ListContainer;