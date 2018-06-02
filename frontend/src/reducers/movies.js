import {
  FETCHED_ALL_MOVIES,
  FETCHED_MOVIE_RESPONSE,
} from '../constants';

const movies = (state = [], action) => {

  switch (action.type) {
    case FETCHED_ALL_MOVIES:
      return [...action.payload];
    case FETCHED_MOVIE_RESPONSE:
      let imdbID = action.payload.description.imdbID;
      let exists = state.find((e) => e.description.imdbID === imdbID);
      if (!exists) {
        return [...state, action.payload];
      }
      return state;
    default:
      return state;
  }
};

export default movies;