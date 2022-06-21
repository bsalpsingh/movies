import React from "react";

// custom components
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
//library fxns
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
//
import { selectMovie } from "../../../store/movies/movies.selectors";
import { mutateWatchListStart } from "../../../store/movies/movies.actions";
// styles
import { useStyles } from "./movieCards.style";
const SimpleMovieCard = ({ details, history, dispatch, movieData }) => {
  const styles = useStyles();

  // handlers

  const goto = (url) => () => {
    history.push(url);
  };

  const mutateWatchList = (movieId) => () => {
    dispatch(mutateWatchListStart(movieId));
  };
  return (
    <Card elevation={5} className={styles.root}>
      <IconButton
        className={styles.iconButton}
        aria-label="add to favorites"
        onClick={mutateWatchList(details.id)}
      >
        {movieData.watchList.findIndex((movie) => movie.id === details.id) >=
        0 ? (
          <FavoriteIcon className={styles.favIcon} />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
      <CardMedia
        onClick={goto(`/movie/${details.id}`)}
        className={styles.media}
        image={details.src}
        title="Paella dish"
      />
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  movieData: selectMovie,
});
export const MovieCard = connect(mapStateToProps)(withRouter(SimpleMovieCard));
