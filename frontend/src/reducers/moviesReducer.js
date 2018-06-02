import {FETCHED_ALL_MOVIES,FETCH_ALL_MOVIES_REQ, FETCHED_MOVIE_RESPONSE} from '../constants';

const initState = {
  movieDescription: '',
  listOfAllMovies: [],
  listOfAllCommentsInDatabase:[],
  listOfCommentsForMovie:[]
};

const moviesReducer = (state = initState, action) => {

  switch (action.type) {

    case FETCHED_ALL_MOVIES:
      // console.log(action.payload);
      return {
          ...state,
        listOfAllMovies: action.payload
      };
    case FETCHED_MOVIE_RESPONSE:
      let imdbID = '';
      let newState = Object.assign({},state);
      try {
        imdbID = action.payload.description.imdbID;
        let exists = state.listOfAllMovies.map((e)=>e.description.imdbID).indexOf(imdbID);
        if(!exists && imdbID) newState.listOfAllMovies.push(action.payload);
      } catch (e) {console.log('Movie not found') }

      return {
        ...state,
        listOfAllMovies: [...state.listOfAllMovies]
      };

    case 'FETCH_COMMENTS_FOR_MOVIE':

      return {
      };
    case 'SEND_COMMENT':

      return {
      };
    default:
      return state;
  }
};

export default moviesReducer;