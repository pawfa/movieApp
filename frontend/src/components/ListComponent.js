import React, {Component} from 'react';
import {Button} from "mdbreact";
import './ListComponent.css'

class ListComponent extends Component {
  createButtons = ()=>{
    let {listOfAllMovies} = this.props;
    let buttonsArr = [];
    console.log(listOfAllMovies);

    listOfAllMovies.forEach((e,i)=>{
      buttonsArr.push(
          <Button key={i}>{e.description['Title']}</Button>
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