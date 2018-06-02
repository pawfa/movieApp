import React, {Component} from 'react';
import {Input,Button} from "mdbreact";
import './InputComponent.css'
import {Row} from "mdbreact";

class InputComponent extends Component {

  handleSubmit = (event)=>{
    event.preventDefault();
    const {sendQuery} = this.props;
    sendQuery(event.target.query.value)
  };

  render() {

    return <div className={'inputComponent'}>
      <form onSubmit={this.handleSubmit}>
        <Row>
        <Input className={'inputComponent-input'} name='query' hint="Type movie name" />
        <div className="text-center">
          <Button type='submit'>Login</Button>
        </div>
        </Row>
      </form>
    </div>;

  }

}

export default InputComponent;