import React from "react";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: "relative",
//     height: "2rem",
//     borderRadius: "none",
//     backgroundColor: fade("#C0C0C0", 0.25),
//     "&:hover": {
//       backgroundColor: fade("#C0C0C0", 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(3),
//       width: "auto",
//     },
//   },
//   icon: {
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   inputRoot: {
//     color: "inherit",
//     fontSize: "0.8rem",
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     fontSize: "0.8rem",
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, // vertical padding + font size from searchIcon
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       maxWidth: "100%",
//       width: "15rem",
//     },
//   },
// }));

import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputBase, Paper } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    alignItems: "center",
    backgroundColor: "#EEEEEE",
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
  },
}));

function Search(props) {
  const classes = useStyles(props);

  return (
    <Paper square component="form" className={classes.root}>
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
