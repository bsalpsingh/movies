

import { takeLatest, call, put, all } from "redux-saga/effects";
// import axios from "axios"; // to be used with real api
// todo  import action types
import movieActionTypes from "./movies.types";
// todo import actions
import { movieData } from "./movieMockAPI";
import {
  fetchMovieListSuccess,
  fetchMovieListFailure,
  fetchMovieByIdSuccess,
  fetchMovieByIdFailure,
  mutateWatchListSuccess,
  mutateWatchListFailure,
} from "./movies.actions";

// helpers
const getMovieList = () => {
  return movieData.movieLists;
};

const getMovieById = (id) => {
  return movieData.movieLists[
    movieData.movieLists.findIndex((movie) => {
      return movie.id === parseInt(id);
    })
  ];
};

// mutate watch list by id

const mutateWatchList = (movieId) => {
  // check if id in watch list, if true append else delete

  let movieIndex = movieData.watchList.findIndex(
    (movie) => movie.id === parseInt(movieId)
  );
  console.log(movieIndex, "movie index at watch list",movieData);
  if (movieIndex >= 0) {
    movieData.watchList.splice(movieIndex);
  } else {
    let newMovieIndex = movieData.movieLists.findIndex(
      (movie) => movie.id === parseInt(movieId)
    );
    if (newMovieIndex) {
      movieData.watchList.push(movieData.movieLists[newMovieIndex]);
    }
    // movieData.watchList.push()
  }
};

// ? place holder for axios
// let axiosConfig = {
//   headers: {
//     "Content-Type": "application/json",
//   },
// //   withCredentials: true,
// };

export function* fetchMovieSubSaga() {
  try {
    // mocking  api  delay with timeout
    // const movieList = setTimeout(getMovieList, 5000);

    const movieList = yield new Promise((resolve, reject) => {
      resolve(getMovieList());
    });

    yield put(fetchMovieListSuccess(movieList));
  } catch (error) {
    yield put(fetchMovieListFailure(error));
  }
}

export function* fetchMovieSaga() {
  yield takeLatest(movieActionTypes.FETCH_MOVIE_LIST_START, fetchMovieSubSaga);
}

// fetch movie by id

export function* fetchMovieByIdSubSaga({ payload }) {
  try {
    // get movie by id from mock data
    const movieDetails = yield new Promise((resolve, reject) => {
      resolve(getMovieById(payload));
    });

    yield put(fetchMovieByIdSuccess(movieDetails));
  } catch (error) {
    yield put(fetchMovieByIdFailure(error));
  }
}
export function* fetchMovieByIdSaga() {
  yield takeLatest(
    movieActionTypes.FETCH_MOVIE_BY_ID_START,
    fetchMovieByIdSubSaga
  );
}

// mutate watch list
export function* mutateWatchListSubSaga({ payload }) {
  try {
    yield mutateWatchList(payload);
    yield put(mutateWatchListSuccess());
  } catch (error) {
    yield put(mutateWatchListFailure(error));
  }
}

export function* mutateWatchListSaga() {
  yield takeLatest(
    movieActionTypes.MUTATE_WATCHLIST_START,
    mutateWatchListSubSaga
  );
}
export default function* MovieSagas() {
  yield all([
    call(fetchMovieSaga),
    call(fetchMovieByIdSaga),
    // call(mutateWatchListSaga),
  ]);
}
