import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListComponent from '../components/ListComponent';

class ListContainer extends Component{

  render(){
    return <ListComponent/>;

  }

}

const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

ListContainer = connect(mapStateToProps, mapDispatchToProps)(
    ListContainer);
export default ListContainer;