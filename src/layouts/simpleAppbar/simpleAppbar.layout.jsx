import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//library fxns
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    margin: 8,
  },
}));

export const SimpleAppBar = ({ match, history }) => {
  const classes = useStyles();

  const handleClick = (url) => (e) => {
   
    history.push(url);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            style={{
              display: "flex",
              flexGrow: 0.5,
            }}
            variant="h6"
            noWrap
          >
            Cineflix
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography
              onClick={handleClick("/")}
              className={classes.title}
              variant="h6"
              noWrap
            >
              Movies
            </Typography>

            <Typography
              onClick={handleClick("/watchlist")}
              className={classes.title}
              variant="h6"
              noWrap
            >
              WatchList
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};
export const AppBarLayout = withRouter(SimpleAppBar);
