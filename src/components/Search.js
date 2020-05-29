import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputBase, Paper } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
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
    [breakpoints.up("md")]: {
      paddingBottom: `${typography.pxToRem(3)}`,
      paddingTop: `${typography.pxToRem(3)}`,
    },
    [breakpoints.up("xl")]: {
      paddingBottom: `${typography.pxToRem(7)}`,
      paddingTop: `${typography.pxToRem(7)}`,
    },
  },
}));

function Search({ onClick, onChange, ...props }) {
  const classes = useStyles(props);
  const [term, setTerm] = useState();
  const handleChange = (e) => {
    setTerm(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  const handleClick = (e) => {
    if (onClick) {
      const ev = e;
      ev.target.value = term;
      onClick(ev);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Do code here
      e.preventDefault();
      if (onClick) {
        return onClick(e);
      }
    }
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        inputProps={{ "aria-label": "search al datasets" }}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Search all datasets ..."
        classes={{
          root: classes.input,
          input: classes.inputInput,
        }}
        {...props}
      />
      <IconButton
        onClick={handleClick}
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon style={{ fontSize: 42 }} />
      </IconButton>
    </Paper>
  );
}

export default Search;
