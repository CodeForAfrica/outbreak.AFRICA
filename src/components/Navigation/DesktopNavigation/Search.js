import React from "react";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    height: "2rem",
    borderRadius: "none",
    backgroundColor: "#EEEEEE",
    "&:hover": {
      backgroundColor: "#EEEEEE",
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    top: 0,
    color: "#9D9C9C",
  },
  inputRoot: {
    color: "#9D9C9C",
    // fontSize: '0.8rem',
  },
  inputInput: {
    ...theme.typography.caption,
    ...{
      padding: theme.spacing(1, 0, 1, 2),
      // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, // vertical padding + font size from searchIcon
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        maxWidth: "100%",
      },
    },
  },
}));

function Search() {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for issues,topics,etc..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
      <div className={classes.searchIcon}>
        <SearchIcon size="small" />
      </div>
    </div>
  );
}

export default Search;
