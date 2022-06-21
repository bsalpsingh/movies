import { useState, useEffect } from "react";

// custom components

import { alpha, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    // padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "36ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

export const SearchFiled = ({ passSearchString }) => {
  const classes = useStyles();

  // component states
  const [searchString, setSearchString] = useState("");

  // handlers
  const handleSearchString = (e) => {
    if (!!e.target.value) {
      setSearchString(e.target.value);
    } else {
      setSearchString("");
    }
  };

  // pass search string to parent with every change

  useEffect(() => {
    passSearchString(searchString);
  }, [passSearchString, searchString]);

  //
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        autoFocus={true}
        onChange={handleSearchString}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};
