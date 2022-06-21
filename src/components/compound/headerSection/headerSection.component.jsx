import { useState, useEffect } from "react";
// components
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { SearchFiled } from "../../standalone/searchField/searchField.component";
// styles
import { useStyles } from "./headerSection.styles";

// library fxns
import { useTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//custom fxns
import { selectMovie } from "../../../store/movies/movies.selectors";
import { mutateWatchListStart } from "../../../store/movies/movies.actions";

export const Header = ({
  passMovieSearchString,
  title,
  match,
  dispatch,
  movieData,
}) => {
  const { t } = useTranslation();
  const styles = useStyles();
  const [movieSearchString, setMovieSearchString] = useState("");
  const passSearchString = (searchString) => {
    setMovieSearchString(searchString);
  };

  useEffect(() => {
    if (!!passMovieSearchString) {
      passMovieSearchString(movieSearchString);
    }
  }, [movieSearchString, passMovieSearchString]);

  const mutateWatchList = () => {
    dispatch(mutateWatchListStart(match.params.id));
  };

  // todo refractor conditional rendering to render components

  return (
    <div className={styles.headerSection}>
      <Typography
        className={styles.typography}
        gutterBottom
        color="primary"
        align="center"
        variant="h4"
      >
        {t(`${title}`)}
      </Typography>

      {!!match.params.id ? (
        <Button
          className={styles.watchListButton}
          variant="outlined"
          onClick={mutateWatchList}
        >
          {movieData.watchList.findIndex(
            (movie) => movie.id === parseInt(match.params.id)
          ) >= 0
            ? "Remove from watchList"
            : "Add to watchlist"}
        </Button>
      ) : (
        <SearchFiled
          passSearchString={passSearchString}
          className={styles.searchField}
        />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ movieData: selectMovie });
export const HeaderSection = connect(mapStateToProps)(withRouter(Header));
