import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputBase, Paper } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    border: "1px solid #9D9C9C",
    borderRadius: 10,
    boxShadow: "none",
    display: "flex",
    width: "100%",
  },
  input: {
    color: "#9D9C9C",
    flex: 1,
    fontSize: typography.pxToRem(20),
  },
  inputInput: {
    flex: 1,
    paddingBottom: typography.pxToRem(15),
    paddingLeft: typography.pxToRem(19),
    paddingRight: typography.pxToRem(19),
    paddingTop: typography.pxToRem(13),
  },
  iconButton: {
    color: "#9D9C9C",
    padding: 0,
  },
}));

function Search(props) {
  const classes = useStyles(props);

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        placeholder="Search for issues, topics, etc…"
        inputProps={{ "aria-label": "search for issues, topics, etc…" }}
        classes={{
          root: classes.input,
          input: classes.inputInput,
        }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon style={{ fontSize: 42 }} />
      </IconButton>
    </Paper>
  );
}

export default Search;
