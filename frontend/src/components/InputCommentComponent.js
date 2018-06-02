import React, {Component} from 'react';
import {Input,Button} from "mdbreact";
import './InputCommentComponent.css'

class InputCommentComponent extends Component {

  handleSubmit = (event)=>{
    event.preventDefault();
    const {sendComment,movieId} = this.props;
    sendComment({movieId: movieId, content: event.target.comment.value});

  };

  render() {
    const{movieId} = this.props;
    if(movieId){
      return <div className={'inputComment'}>
        <form onSubmit={this.handleSubmit}>
            <Input value="" className={'inputComment-input'} name='comment' type="textarea" label="Place for your comment"/>
            <div className="text-center">
              <Button type='submit'>Submit</Button>
            </div>

        </form>

      </div>;
    }else{
      return null;
    }


  }

}

export default InputCommentComponent;