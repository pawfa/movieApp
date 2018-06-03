import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'mdbreact';

class MovieContainer extends Component {

  render() {
    const description = this.props.movieData &&
        this.props.movieData.description;
    return description ? <div>
      <Container style={{width: '50vw'}}>
        <Row>
          <Col lg="5">
            <img className="img-fluid z-depth-2" src={description.Poster}
                 alt="Movie Poster"/>
          </Col>
          <Col lg="7">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>{description.Title}</strong></h3>
            <p>{description.Plot}</p>
            <p>by <a><strong>{description.Director}</strong></a>, {description.Released}
            </p>
          </Col>
        </Row>
      </Container>
    </div> : null;
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

MovieContainer = connect(mapStateToProps)(
    MovieContainer);
export default MovieContainer;