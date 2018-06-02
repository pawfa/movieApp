import {FETCHED_ALL_MOVIES,FETCH_ALL_MOVIES_REQ, FETCHED_MOVIE_RESPONSE} from '../constants';

const initState = {
  movieDescription: '',
  listOfAllMovies: [1,2,3,4,5],
  listOfAllCommentsInDatabase:[],
  listOfCommentsForMovie:[]
};

const moviesReducer = (state = initState, action) => {

  switch (action.type) {

    case FETCHED_ALL_MOVIES:
      console.log(initState);
      console.log(action.payload);
      return {
          ...initState,
        listOfAllMovies: action.payload
      };
    case FETCHED_MOVIE_RESPONSE:
      console.log(action.payload);
      return {
        ...state
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