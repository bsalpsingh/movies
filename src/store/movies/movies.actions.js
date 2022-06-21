import movieActionTypes from "./movies.types";

// fetch movie list actions group
// fetchMovieListStart,fetchMovieListSuccess,fetchMovieListFailure
export const fetchMovieListStart = () => ({
  type: movieActionTypes.FETCH_MOVIE_LIST_START,
});

export const fetchMovieListSuccess = (movieList) => ({
  type: movieActionTypes.FETCH_MOVIE_LIST_SUCCESS,
  payload: movieList,
});

export const fetchMovieListFailure = (fetchError) => ({
  type: movieActionTypes.FETCH_MOVIE_LIST_FAILURE,
  payload: fetchError,
});

// fetch movie details by id, fetchMovieByIdSuccess,fetchMovieByIdFailure
// fetchMovieByIdStart,
export const fetchMovieByIdStart = (movieId) => ({
  type: movieActionTypes.FETCH_MOVIE_BY_ID_START,
  payload: movieId,
});

export const fetchMovieByIdSuccess = (movieDetails) => ({
  type: movieActionTypes.FETCH_MOVIE_BY_ID_SUCCESS,
  payload: movieDetails,
});

export const fetchMovieByIdFailure = (fetchError) => ({
  type: movieActionTypes.FETCH_MOVIE_LIST_FAILURE,
  payload: fetchError,
});

// MUTATE WATCH LIST
// mutateWatchListStart,mutateWatchListSuccess,mutateWatchListFailure
export const mutateWatchListStart = (movieId) => ({
  type: movieActionTypes.MUTATE_WATCHLIST,
  payload: movieId,
});

export const mutateWatchListSuccess = () => ({
  type: movieActionTypes.MUTATE_WATCHLIST_SUCCESS,
});

export const mutateWatchListFailure = (error) => ({
  type: movieActionTypes.MUTATE_WATCHLIST_FAILURE,
  payload: error,
});
