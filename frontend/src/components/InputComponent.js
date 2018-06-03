import React, {Component} from 'react';
import './InputComponent.css';

class InputComponent extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const {value} = event.target.query;
    const {sendQuery} = this.props;
    if (value) sendQuery(value);
  };

  render() {

    return <div className={'inputComponent'}>
      <form onSubmit={this.handleSubmit} className={'md-form input-group '}>
        <div className="md-form input-group">
          <input name='query' type="text" className="form-control"
                 placeholder="Type movie name" aria-label="Recipient's username"
                 aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-default waves-effect m-0"
                    type="submit">Submit
            </button>
          </div>
        </div>
      </form>

    </div>;

  }

}

export default InputComponent;