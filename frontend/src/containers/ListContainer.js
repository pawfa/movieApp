import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListComponent from '../components/ListComponent';
import {fetchAllMoviesReq} from '../actions';

class ListContainer extends Component{

  componentDidMount(){
      this.props.fetchAllMovies();
    console.log(this.props.listOfAllMovies);
  }

  render(){
    // return <ListComponent fetchingMovies ={this.props.fetchAllMoviesReq}/>;
    return <ListComponent listOfAllMovies ={this.props.listOfAllMovies}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    listOfAllMovies: state.listOfAllMovies
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