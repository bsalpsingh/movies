import movieActionTypes from "./movies.types";
import { mutateWatchList } from "./helpers";
const initialState = {
  // movie list
  fetchingMovieList: false,
  movieList: null,
  fetchMovieListError: null,

  // movie details by id
  // fetchMovieDetails,movieDetails,fetchMovieDetailsError
  fetchMovieDetails: false,
  movieDetails: null,
  fetchMovieDetailsError: null,

  // watch list
  // isMutatingWatchList: false,
  watchList: [],
  // mutateError: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch movie list
    case movieActionTypes.FETCH_MOVIE_LIST_START:
      return {
        ...state,

        fetchingMovieList: true,
        movieList: null,
        fetchMovieListError: null,
      };
    case movieActionTypes.FETCH_MOVIE_LIST_SUCCESS:
      return {
        ...state,

        fetchingMovieList: false,
        movieList: action.payload,
        fetchMovieListError: null,
      };
    case movieActionTypes.FETCH_MOVIE_LIST_FAILURE:
      return {
        ...state,
        fetchingMovieList: false,
        movieList: null,
        fetchMovieListError: action.payload,
      };

    // fetch movie details by id
    case movieActionTypes.FETCH_MOVIE_BY_ID_START:
      return {
        ...state,
        fetchMovieDetails: true,
        movieDetails: null,
        fetchMovieDetailsError: null,
      };

    case movieActionTypes.FETCH_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        fetchMovieDetails: false,
        movieDetails: action.payload,
        fetchMovieDetailsError: null,
      };

    case movieActionTypes.FETCH_MOVIE_BY_ID_FAILURE:
      return {
        ...state,
        fetchMovieDetails: false,
        movieDetails: null,
        fetchMovieDetailsError: action.payload,
      };

    // mutate watch list

    // case movieActionTypes.MUTATE_WATCHLIST_START:
    //   return {
    //     ...state,
    //     isMutatingWatchList: true,
    //     watchList: null,
    //     mutateError: null,
    //   };

    case movieActionTypes.MUTATE_WATCHLIST:
      return {
        ...state,

        watchList: mutateWatchList(action.payload, state.watchList),
      };

    // case movieActionTypes.MUTATE_WATCHLIST_FAILURE:
    //   return {
    //     ...state,
    //     isMutatingWatchList: false,
    //     watchList: null,
    //     mutateError: action.payload,
    //   };
    default:
      return state;
  }
};
export default movieReducer;
