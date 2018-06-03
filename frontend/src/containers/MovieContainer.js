import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col, Mask, View} from 'mdbreact';

class MovieContainer extends Component{

  render(){
    const movieData = this.props.movieData;
    if(movieData){
      console.log(movieData);
      let {Title, Poster, Plot, Director,Released} = movieData.description;
      console.log(Title);
    return <div>
      <Container style={{width:'50vw'}}>
        <Row>
          <Col lg="5">
            {/*<View className="rounded  mb-lg-0 mb-4" hover waves>*/}
              <img className="img-fluid z-depth-2" src={Poster} alt="Movie Poster"/>
              {/*<a><Mask overlay="white-slight"/></a>*/}
            {/*</View>*/}
          </Col>
          <Col lg="7">
            <h3 className="font-weight-bold mb-3 p-0"><strong>{Title}</strong></h3>
            <p>{Plot}</p>
            <p>by <a><strong>{Director}</strong></a>, {Released}</p>
          </Col>
        </Row>
      </Container>

    </div>;
  }else{
      return(null);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

MovieContainer = connect(mapStateToProps, mapDispatchToProps)(
    MovieContainer);
export default MovieContainer;