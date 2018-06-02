import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from "mdbreact";
import './ListComponent.css'

class ListComponent extends Component {


  createButtons = ()=>{
    let arr = [1,2,3,4,5,6,7,8];
    let buttonsArr = [];

    arr.forEach((i,e)=>{
      buttonsArr.push(
          <Button key={i} >{e}</Button>
      )
    });
    return buttonsArr;
  };

  render() {

    return <div className={'listComponent'}>
      {this.createButtons()}
    </div>;

  }

}

export default ListComponent;