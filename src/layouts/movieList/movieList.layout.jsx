import { useEffect, useState } from "react";

// library functions
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
// custom fxns

import { fetchMovieListStart } from "../../store/movies/movies.actions";
import { selectMovie } from "../../store/movies/movies.selectors";

// components
import { MovieCard } from "../../components/compound/movieCards/movieCards.component";
//styles
import { styles } from "./movieList.styles";

const MovieListLayout = ({
  dispatch,
  match,
  movieSearchString,
  movieData: { fetchMovieListError, fetchingMovieList, movieList, watchList },
}) => {
  const [renderList, setRenderList] = useState(null);

  const isHomePage = match.isExact && match.path === "/";
  // useEffects
  useEffect(() => {
    if (isHomePage) {
      dispatch(fetchMovieListStart());
    }
  }, [dispatch, isHomePage, match]);

  // auto populate the render list
  useEffect(() => {
    if (isHomePage && !!movieList && !!movieList.length) {
      setRenderList(movieList);
    } else {
      setRenderList(watchList);
    }
  }, [watchList, movieList, isHomePage]);

  //  mutatue render list w.r.t search string

  useEffect(() => {
    if (!movieSearchString) {
      setRenderList(isHomePage ? movieList : watchList);
    } else {
      const matches = isHomePage
        ? movieList.filter((movie) =>
            movie.title.toLowerCase().startsWith(movieSearchString)
          )
        : watchList.filter((movie) =>
            movie.title.toLowerCase().startsWith(movieSearchString)
          );

      setRenderList(matches);
    }
  }, [isHomePage, movieList, movieSearchString, watchList]);

  return (
    <div style={styles.movieCards}>
      {!!renderList &&
        renderList.map((movie) => (
          <MovieCard
            key={movie.id}
            details={{ src: movie.src, id: movie.id }}
          />
        ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  movieData: selectMovie,
});
export const MovieList = connect(mapStateToProps)(withRouter(MovieListLayout));
