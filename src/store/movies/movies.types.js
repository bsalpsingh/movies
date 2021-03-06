const movieActionTypes = {
  //  FETCH MOVIE LIST
  FETCH_MOVIE_LIST_START: "FETCH_MOVIE_LIST_START",
  FETCH_MOVIE_LIST_SUCCESS: "FETCH_MOVIE_LIST_SUCCESS",
  FETCH_MOVIE_LIST_FAILURE: "FETCH_MOVIE_LIST_FAILURE",

  // Fetch movie details by id
  FETCH_MOVIE_BY_ID_START: "FETCH_MOVIE_BY_ID_START",
  FETCH_MOVIE_BY_ID_SUCCESS: "FETCH_MOVIE_BY_ID_SUCCESS",
  FETCH_MOVIE_BY_ID_FAILURE: "FETCH_MOVIE_BY_ID_FAILURE",

  // mutate watch list
  MUTATE_WATCHLIST: "MUTATE_WATCHLIST",
  // MUTATE_WATCHLIST_SUCCESS: "MUTATE_WATCHLIST_SUCCESS",
  // MUTATE_WATCHLIST_FAILURE: "MUTATE_WATCHLIST_FAILURE",
};

export default movieActionTypes;
