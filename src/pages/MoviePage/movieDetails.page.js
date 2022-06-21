import { useEffect } from "react";
import { styles } from "./index.styles";
// library fxns
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// custom fxns
import { fetchMovieByIdStart } from "./../../store/movies/movies.actions";
import { selectMovie } from "../../store/movies/movies.selectors";
// components
import { SimpleBackdrop } from "./../../components/compound/backdrop/backdrop.component";
import { HeaderSection } from "../../components/compound/headerSection/headerSection.component";
import { MovieDetailsLayout } from "./../../layouts/movieDetail/movieDetail.layout";
const DetailsPage = ({
  match,
  dispatch,
  movieData: { fetchMovieDetails, movieDetails, fetchMovieDetailsError },
}) => {
  // fetching movie by id
  useEffect(() => {
    dispatch(fetchMovieByIdStart(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <div style={styles.homePageContainer}>
      <HeaderSection title="Movie Details" />

      {!!movieDetails ? (
        <MovieDetailsLayout details={movieDetails} />
      ) : fetchMovieDetails ? (
        <SimpleBackdrop />
      ) : fetchMovieDetailsError ? (
        <div>error</div>
      ) : null}
      {/* {!!movieDetails && JSON.stringify(movieDetails)} */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  movieData: selectMovie,
});
export const MovieDetailsPage = connect(mapStateToProps)(
  withRouter(DetailsPage)
);
