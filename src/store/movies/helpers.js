import { movieData } from "./movieMockAPI";

export const mutateWatchList = (movieId, watchList) => {
  // check if id in watch list, if true append else delete

  let movieIndex = watchList.findIndex(
    (movie) => movie.id === parseInt(movieId)
  );

  if (movieIndex >= 0) {
    console.log("redux watchlist");
    watchList.splice(movieIndex, 1);
  } else {
    let newMovieIndex = movieData.movieLists.findIndex(
      (movie) => movie.id === parseInt(movieId)
    );

    if (newMovieIndex >= 0) {
      watchList.push(movieData.movieLists[newMovieIndex]);
    }
  }
  return [...watchList];
};
