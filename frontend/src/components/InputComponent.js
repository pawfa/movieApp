import React, {Component} from 'react';
import {Input,Button} from "mdbreact";
import './InputComponent.css'

class InputComponent extends Component {

  handleSubmit = (event)=>{
    event.preventDefault();
    const {sendQuery} = this.props;
    sendQuery(event.target.query.value)
  };



  render() {

    return <div className={'inputComponent'}>
      <form onSubmit={this.handleSubmit}>
        <p className="h5 text-center mb-4">Sign in</p>
        <Input className={'inputComponent-input'} name='query' hint="Type movie name" />
        <div className="text-center">
          <Button type='submit'>Login</Button>
        </div>
      </form>
    </div>;

  }

}

export default InputComponent;