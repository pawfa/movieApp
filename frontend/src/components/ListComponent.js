import React, {Component} from 'react';
import {Button} from "mdbreact";
import './ListComponent.css'

class ListComponent extends Component {
  createButtons = ()=>{
    let {listOfAllMovies, showMovie} = this.props;
    let buttonsArr = [];
    console.log(listOfAllMovies);

    listOfAllMovies.forEach((e,i)=>{
      buttonsArr.push(
          <Button key={i} id={e._id} onClick={showMovie}>{e.description['Title']}</Button>
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