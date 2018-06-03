import React, {Component} from 'react';
import {Input, Button} from 'mdbreact';
import './InputCommentComponent.css';

class InputCommentComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {sendComment, movieId} = this.props;
    const {value} = this.state;
    if (value) {
      sendComment({movieId: movieId, content: value});
    }
    this.setState({value: ''});
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  render() {
    const {movieId, showAllComments} = this.props;
    return movieId ? <div className={'inputComment'}>
          <form onSubmit={this.handleSubmit}>
            <Input value={this.state.value} onChange={this.handleChange}
                   className={'inputComment-input'} type="textarea"
                   label="Place your comment here"/>
            <div className="float-right">
              <Button type='submit'>Submit</Button>
              <Button onClick={showAllComments}>All comments</Button>
            </div>
          </form>
        </div>
        : null;
  }

}

export default InputCommentComponent;