import React, { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputBase, Paper } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';

import config from 'config';

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    alignItems: "center",
    display: "flex",
    width: "100%",
  },
  input: {
    backgroundColor: "#EEEEEE !important",
    border: "1px solid #707070 !important",
    borderRadius: typography.pxToRem(10),
    boxShadow: "none",
    color: "#9D9C9C",
    flex: 1,
    fontSize: "0.8125rem !important",
    [breakpoints.up("md")]: {
      border: "1px solid #9D9C9C !important",
      fontSize: "1.25rem !important",
      lineHeight: typography.pxToRem(38/20),
    },
  },
  inputInput: {
    flex: 1,
    [breakpoints.up("md")]: {
      paddingBottom: typography.pxToRem(7),
      paddingLeft: typography.pxToRem(9),
      paddingRight: typography.pxToRem(9),
      paddingTop: typography.pxToRem(7),
    },
    [breakpoints.up("xl")]: {
      paddingBottom: typography.pxToRem(15),
      paddingLeft: typography.pxToRem(19),
      paddingRight: typography.pxToRem(19),
      paddingTop: typography.pxToRem(13),
    },
  },
  iconButton: {
    color: "#9D9C9C",
    fontSize: "1.5rem",
  },
  inputIcon: {
    top: typography.pxToRem(10),
  }
}));

function Search({ ariaLabel, isMobile, onClick, onChange, placeholder, ...props }) {
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
        onClick(e);
      }
    }
  };

  return (
    <ReactiveBase app="outbreak" url={config.ES_URL}>
      <DataSearch
        componentId="autoSuggest"
        dataField={['post_title', 'post_content']}
        highlight
        autosuggest
        queryFormat="and"
        placeholder="Search for issues, topics, etc.."
        showIcon={isMobile}
        iconPosition="right"
        icon={<SearchIcon className={classes.iconButton} />}
        innerClass={{
          input: classes.input,
          icon: classes.inputIcon,
        }}
        />
      {/* <Paper component="form" className={classes.root}>
        <InputBase
          inputProps={{ "aria-label": ariaLabel }}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
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
      </Paper> */}
    </ReactiveBase>
  );
}

Search.propTypes = {
  ariaLabel: PropTypes.string,
  placeholder: PropTypes.string,
  isMobile: PropTypes.bool.isRequired,
};

Search.defaultProps = {
  ariaLabel: "search al datasets",
  placeholder: "Search for issues, topics, etc…",
};
export default Search;
