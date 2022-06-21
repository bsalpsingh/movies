import { createSelector } from "reselect";
// create an input selector to retrieve the user state
export const selectMovie = (state) => state.movie;
export const selectMovieList = createSelector(
  [selectMovie],
  (movieData) => movieData.movieList
);
