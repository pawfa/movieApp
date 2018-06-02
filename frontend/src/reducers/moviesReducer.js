
const initState = {
  movieDescription: JSON,
  listOfAllMoviesTitles: [],
  listOfAllCommentsInDatabase:[],
  listOfCommentsForMovie:[]
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {

    case 'FETCH_ALL_MOVIES':
      return {
          ...state,
        listOfAllMoviesTitles: action.payload
      };
    case 'SEND_MOVIE_QUERY':
      console.log(action.payload);
      return {
        ...state
      };

    case 'FETCH_ALL_COMMENTS':
          return {

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