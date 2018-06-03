import React, {Component} from 'react';
import {Button} from "mdbreact";
import './ListComponent.css'

class ListComponent extends Component {
  createButtons = ()=>{
    let {listOfAllMovies, showMovie} = this.props;

    return listOfAllMovies.map((e,i)=>
          <Button className={'btn-rounded'} key={i} id={e._id} onClick={showMovie}>{e.description['Title']}</Button>
    );
  };

  render() {
    return <div className={'listComponent'}>
      {this.createButtons()}
    </div>;
  }
}
export default ListComponent;