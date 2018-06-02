import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputComponent from '../components/InputComponent';
import {sendMovieQuery} from '../actions';
class InputContainer extends Component{



  render(){
    return <InputComponent sendQuery={this.props.sendMovieQuery}/>;

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

InputContainer = connect(mapStateToProps, mapDispatchToProps)(
    InputContainer);
export default InputContainer;