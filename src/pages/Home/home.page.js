import { useState } from "react";
// components

// custom components
import { HeaderSection } from "../../components/compound/headerSection/headerSection.component";
import { MovieList } from "../../layouts/movieList/movieList.layout";
// custom fxns
import { selectMovie } from "../../store/movies/movies.selectors";
// library fxns
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// styles
import { styles } from "./index.styles";

export const HomePage = ({
  movieData: { fetchMovieListError, fetchingMovieList, movieList },
  dispatch,
}) => {
  // component states

  const [movieSearchString, setMovieSearchString] = useState("");

  const passSearchString = (searchString) => {
    setMovieSearchString(searchString);
  };

  return (
    <div style={styles.homePageContainer}>
      <HeaderSection
        title="Movies"
        passMovieSearchString={passSearchString}
      ></HeaderSection>
      <MovieList movieSearchString={movieSearchString} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  movieData: selectMovie,
});
export default connect(mapStateToProps)(HomePage);
