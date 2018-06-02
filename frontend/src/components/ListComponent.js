import React, {Component} from 'react';
import {Button} from "mdbreact";
import './ListComponent.css'

class ListComponent extends Component {
  createButtons = ()=>{
    let listOfAllMovies = [] || this.props.listOfAllMovies;
    let buttonsArr = [];

    listOfAllMovies.forEach((i,e)=>{
      buttonsArr.push(

          <Button key={i}>1</Button>
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
{/*<Button onClick={this.props.fetchingMovies} key={i} >{e}</Button>*/}
export default ListComponent;