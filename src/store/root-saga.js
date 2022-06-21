import { all, call } from "redux-saga/effects";
import MovieSagas from "./movies/movies.sagas";

export default function* rootSaga() {
  yield all([call(MovieSagas)]);
}
